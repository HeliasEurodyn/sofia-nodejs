const ELASTIC_URL = process.env.ELASTIC_URL;

async function executeSearch(index, query) {
  const url = `${ELASTIC_URL}/${index}/_search`;
  
  const body = typeof query === 'string' ? query : JSON.stringify(query);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });

  if (!response.ok) {
    throw new Error(`ElasticSearch request failed: ${response.status}`);
  }

  return response.json();
}

/**
 * Parse CPE string -> fields
 */
function parseCpe(cpe) {
  const parts = cpe.split(':');

  return {
    cpe_part: parts[2],
    cpe_vendor: parts[3],
    cpe_product: parts[4],
    cpe_version: parts[5],
    cpe_update: parts[6],
    cpe_edition: parts[7],
    cpe_language: parts[8],
    cpe_swEdition: parts[9],
    cpe_targetSw: parts[10],
    cpe_targetHw: parts[11],
    cpe_other: parts[12]
  };
}

/**
 * Build Elasticsearch query (same logic as Java service)
 */
function buildCpeQuery(cpes, size = 100) {

  const should = cpes.map(cpe => {

    const fields = parseCpe(cpe);

    const must = Object.entries(fields).map(([field, value]) => ({
      terms: {
        [field]: [value, "*"]
      }
    }));

    return {
      bool: {
        must
      }
    };
  });

  return {
    size,
    query: {
      bool: {
        should,
        minimum_should_match: 1
      }
    },
    collapse: {
      field: "cve_id"
    },
    sort: [
      { cve_id: "asc" }
    ]
  };
}

async function getCvesByCpe(cpes, size = 100) {

  // ensure array
  if (!Array.isArray(cpes)) {
    cpes = [cpes];
  }

  const query = buildCpeQuery(cpes, size);

  const json = await executeSearch(
    'cpe_cve_match',
    query
  );

  const hits = json?.hits?.hits ?? [];

  return hits
    .map(hit => hit?._source?.cve_id)
    .filter(Boolean);
}

/**
 * Same logic as Java getCveById
 */
async function getCveById(id) {

  const query = {
    query: {
      term: {
        id: id
      }
    }
  };

  const json = await executeSearch(
    'cve_list',
    query
  );

  const hits = json?.hits?.hits ?? [];

  if (!hits.length) {
    return {
      error: 'CVE not found',
      id: id
    };
  }

  const source = hits[0]?._source;

  if (!source) {
    return {
      error: 'CVE record missing _source',
      id: id
    };
  }

  return source;
}

module.exports = {
  getCvesByCpe,
  getCveById
};