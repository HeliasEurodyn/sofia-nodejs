const UserSettingsModel = require('../models/crud/UserSettingsModel');

const openvasContext = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const settings = await UserSettingsModel.getById({
      id: userId,
      userId
    });

    const cfg = settings?.user_settings_obj;

    // if (!cfg?.openvas_url || !cfg?.openvas_port || !cfg?.openvas_user || !cfg?.openvas_password) {
    //   return res.status(400).json({
    //     message: 'Openvas credentials not configured'
    //   });
    // }

    // req.openvasConfig = {
    //   host: cfg.openvas_url,
    //   port: parseInt(cfg.openvas_port, 10),
    //   user: cfg.openvas_user,
    //   pass: cfg.openvas_password
    // };

    // Τα έβαλα χειροκίνητα. Θα πρέπει να τα φέρνουμε απ τη βάση.
    req.openvasConfig = {
      host: 'ng-soc-server.eurodyn.com',
      port: '9390',
      user: 'admin',
      pass: 'admin'
    };

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = openvasContext;
