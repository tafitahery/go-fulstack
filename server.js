const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Voila la réponse premier du server');
});

server.listen(process.env.PORT || 3000);
