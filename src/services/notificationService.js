const { getStompServer } = require('../websocket/stompServerInstance');

function notifyUser(userId, payload) {
  const stompServer = getStompServer();
  stompServer.sendToUser(userId, payload);
}

module.exports = {
  notifyUser,
};
