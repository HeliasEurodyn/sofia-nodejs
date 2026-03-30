const asyncHandler = require('../helpers/asyncHandler');
const scenarioService = require('../services/scenarioService');

module.exports = {

  resolve: asyncHandler(async (req, res) => {
    const results = await scenarioService.resolve(req.body);
    res.json(results);
  }),

  execute: asyncHandler(async (req, res) => {
    try {
      const results = await scenarioService.execute({
        id: req.params.id,
        neo4jDriver: req.neo4jDriver,
        ctx: {
          userId: req.user?.id || ''
        }
      });

      if (!results) {
        return res.status(404).json({ message: 'Scenario not found' });
      }

      return res.json(results);
    } catch (error) {
      if (error.message === 'SCENARIO_HAS_NO_QUERIES') {
        return res.status(400).json({ message: 'Scenario has no queries to execute' });
      }

      if (error.message === 'SCENARIO_QUERY_INVALID') {
        return res.status(400).json({ message: 'Scenario query payload is invalid' });
      }

      throw error;
    }
  })
};