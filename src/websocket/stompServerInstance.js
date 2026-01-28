let stompServer = null;

function setStompServer(server) {
  stompServer = server;
}

function getStompServer() {
  if (!stompServer) {
    throw new Error('STOMP server not initialized. Did you call initStompServer(server)?');
  }
  return stompServer;
}

module.exports = {
  setStompServer,
  getStompServer,
};
