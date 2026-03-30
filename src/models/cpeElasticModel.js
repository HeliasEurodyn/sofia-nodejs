const { buildElasticSearchUrl, mapHits } = require('../utils/elastic');

const ELASTIC_URL = process.env.ELASTIC_URL;
const CPE_INDEX = process.env.CPE_INDEX;

async function executeSearch(query) {

  console.log(JSON.stringify(query, null, 2));
    console.log('query');
    console.log(query);
  const url = buildElasticSearchUrl(ELASTIC_URL, CPE_INDEX);
  console.log(url);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  });

  if (!response.ok) {
    throw new Error(`Elastic error: ${response.status}`);
  }

  const json = await response.json();
  return mapHits(json);
}

async function getAllCpes(page, size) {
  const from = page * size;

  return executeSearch({
    query: { match_all: {} },
    from,
    size
  });
}

async function searchCpes(
  cpe,
  vendor,
  product,
  version,
  page,
  size
) {
  const from = page * size;

  const must = [];

  if (cpe !== '*') must.push(wildcard('cpeName', cpe));
  if (vendor !== '*') must.push(wildcard('vendor', vendor));
  if (product !== '*') must.push(wildcard('product', product));
  if (version !== '*') must.push(wildcard('version', version));

  return executeSearch({
    query: must.length
      ? { bool: { must } }
      : { match_all: {} },
    from,
    size
  });
}

/**
 * Same logic as Java getCveById
 */
async function getById(id) {
  console.log(id);

  const query = {
    query: {
      wildcard: {
        cpeName: id
      }
    }
  };

  console.log(JSON.stringify(query));

  const hits = await executeSearch(query);

  if (!hits.length) {
    return {
      error: 'CPE not found',
      id: id
    };
  }

  return hits[0];
}

function wildcard(field, value) {
  return {
    wildcard: {
      [field]: {
        value: `*${value}*`,
        case_insensitive: true
      }
    }
  };
}


module.exports = {
  getAllCpes,
  searchCpes,
  getById
};
