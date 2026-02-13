const express = require('express');
const Parser = require('rss-parser');
const NodeCache = require('node-cache');

const router = express.Router();

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Rita-SOC-Dashboard/1.0',
  },
});

const cache = new NodeCache({ stdTTL: 15 * 60 }); // 15 minutes
const FEED_URL = 'https://feeds.feedburner.com/TheHackersNews';

// μικρό helper για mapping severity (enterprise-y default)
function inferSeverity(title = '') {
  const t = title.toLowerCase();

  if (t.includes('actively exploited') || t.includes('in the wild') || t.includes('zero-day') || t.includes('0-day')) {
    return 'critical';
  }
  if (t.includes('ransomware') || t.includes('exploit') || t.includes('breach')) {
    return 'high';
  }
  if (t.includes('phishing') || t.includes('malware') || t.includes('vulnerability') || t.includes('cve-')) {
    return 'medium';
  }
  return 'low';
}


/**
 * @swagger
 * /api/rss:
 *   get:
 *     summary: Get Rss Feeds
 *     tags: [Rss]
 *     responses:
 *       200:
 *         description: List of Rss entries
 */
router.get('/', async (req, res, next) => {
  try {
    const cached = cache.get('rss:hacker-news');
    if (cached) return res.json(cached);

    const feed = await parser.parseURL(FEED_URL);

    const items = (feed.items || []).slice(0, 30).map((item) => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.isoDate || item.pubDate || '',
        snippet: item.contentSnippet || '',
        image: item.enclosure?.url || null, // 👈 ΑΥΤΟ ΕΙΝΑΙ ΤΟ ΚΛΕΙΔΙ
        severity: inferSeverity(item.title || ''),
      }));

    const payload = {
      source: 'The Hacker News',
      url: FEED_URL,
      updatedAt: new Date().toISOString(),
      items,
    };

    cache.set('rss:hacker-news', payload);
    return res.json(payload);
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
