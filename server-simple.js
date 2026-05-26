#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    serveFile(res, 'index.html');
  } else if (req.url.startsWith('/assets/')) {
    const filePath = path.join(__dirname, req.url);
    if (fs.existsSync(filePath)) {
      serveFile(res, req.url);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else {
    serveFile(res, 'index.html');
  }
});

function serveFile(res, filePath) {
  const fullPath = path.join(__dirname, filePath);
  const content = fs.readFileSync(fullPath);
  const ext = path.extname(filePath);
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
  res.end(content);
}

server.listen(port, '0.0.0.0', () => {
  console.log(`AIToolPilot running on port ${port}`);
});