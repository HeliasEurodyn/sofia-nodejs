const sockjs = require('sockjs');
const StompServer = require('stomp-broker-js');
const stompServerInstance = require('./stompServerInstance');

function initStompServer(httpServer) {
  const sockjsServer = sockjs.createServer({
    prefix: '/sockjs',
  });

  const stompServer = new StompServer({
    server: sockjsServer,
    path: '/sockjs',
    protocol: 'sockjs',
    heartbeat: [20000, 20000],
  });

  sockjsServer.installHandlers(httpServer);

  stompServer.debug = (msg) => {
    console.log('[STOMP]', msg);
  };

  // Helper to send to a specific user's topic
  stompServer.sendToUser = (userId, payload) => {
    stompServer.send(
      `/topic/user-notifications/${userId}`,
      {},
      JSON.stringify(payload)
    );
  };

  // Expose as singleton so routes/services can use it
  stompServerInstance.setStompServer(stompServer);

  console.log('✅ STOMP initialized at /sockjs');
}

module.exports = initStompServer;
