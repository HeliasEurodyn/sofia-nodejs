const http = require('http');
const app = require('./app');
const initStompServer = require('./websocket/stompServer');

const PORT = process.env.PORT || 3010;

const server = http.createServer(app);

// WebSocket / STOMP initialization
initStompServer(server);

server.listen(PORT, () => {
  console.log(`🚀 HTTP + STOMP server running on port ${PORT}`);
});
