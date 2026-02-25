function buildElasticSearchUrl(base, index) {
  return `${base}/${index}/_search`;
}

function mapHits(response) {
  const hits = response?.hits?.hits ?? [];
  return hits.map((h) => h._source);
}

module.exports = {
  buildElasticSearchUrl,
  mapHits
};
