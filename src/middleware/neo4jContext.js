const { getDriver } = require('./neo4jDriverManager');
const UserSettingsModel = require('../models/crud/UserSettingsModel');

const neo4jContext = async (req, res, next) => {
  try {
    const { id: userId } = req.user; // ή όπου έχεις auth context

    const settings = await UserSettingsModel.getById({
      id: userId,
      userId
    });

    const cfg = settings?.user_settings_obj;

    if (!cfg?.neo4j_url || !cfg?.neo4j_user || !cfg?.neo4j_password) {
      return res.status(400).json({
        message: 'Neo4j credentials not configured'
      });
    }

    req.neo4jDriver = getDriver({
      uri: cfg.neo4j_url,
      user: cfg.neo4j_user,
      password: cfg.neo4j_password
    });

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = neo4jContext;
