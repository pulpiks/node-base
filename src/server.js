const http = require('http');

const requestListener = (_req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);