const notificationService = require('./notificationService');

/**
 * Replace this with your real repository/DB layer.
 * Here it's just a stub that "returns" the saved object.
 */
async function saveToDb(input) {
  // TODO: implement DB save (postgres/mysql/mongo/etc)
  return {
    id: Date.now(),
    ...input,
    savedAt: new Date().toISOString(),
  };
}

async function saveAndNotify(input) {
  const saved = await saveToDb(input);

  // Expecting input.userId for demo purposes
  const userId = saved.userId;

  if (userId) {
    notificationService.notifyUser(userId, {
      title: 'New message',
      icon: null,
      payload: saved,
    });
  }

  return saved;
}

module.exports = {
  saveAndNotify,
};
