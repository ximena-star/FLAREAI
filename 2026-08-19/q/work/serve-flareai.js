const http = require('http');
const fs = require('fs');
const path = require('path');

const root = 'C:/Users/XIMENA/Documents/Codex/2026-08-19/q/outputs/flareai';
const types = { '.css': 'text/css', '.js': 'application/javascript', '.html': 'text/html' };

http.createServer((request, response) => {
  const relative = request.url === '/' ? 'index.html' : request.url;
  const file = path.join(root, relative);
  fs.readFile(file, (error, content) => {
    response.writeHead(error ? 404 : 200, { 'Content-Type': types[path.extname(file)] || 'text/plain' });
    response.end(error ? 'Not found' : content);
  });
}).listen(5187, () => console.log('FLAREAI preview: http://localhost:5187'));
