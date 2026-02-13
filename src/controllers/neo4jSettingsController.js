const service = require('../services/neo4jSettingsService');

class Neo4jSettingsController {
  async getJavaScript(req, res, next) {
    try {
      const script = await service.getJavaScript();
      res.type('text/javascript').send(script);
    } catch (err) {
      next(err);
    }
  }

  async getMinifiedJavaScript(req, res, next) {
    try {
      const script = await service.getJavaScript();
      res.type('text/javascript').send(script);
    } catch (err) {
      next(err);
    }
  }

  async getThemes(req, res, next) {
    try {
      const themes = await service.getThemes();
      res.json(themes);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Neo4jSettingsController();
