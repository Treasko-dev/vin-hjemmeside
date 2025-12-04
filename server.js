const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8000;
const ROOT = path.join(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
  res.end('404 Not Found');
}

function send500(res, message) {
  res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
  res.end(message || '500 Internal Server Error');
}

function safePath(requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const filePath = path.join(ROOT, decoded);
  if (!filePath.startsWith(ROOT)) {
    return null; // Prevent directory traversal
  }
  return filePath;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const sanitizedPath = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;
  const targetPath = safePath(sanitizedPath);

  if (!targetPath) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    return res.end('403 Forbidden');
  }

  fs.stat(targetPath, (err, stats) => {
    if (err) {
      return send404(res);
    }

    const fileToServe = stats.isDirectory() ? path.join(targetPath, 'index.html') : targetPath;

    fs.readFile(fileToServe, (readErr, data) => {
      if (readErr) {
        return send500(res, 'Kunne ikke læse filen');
      }

      const ext = path.extname(fileToServe).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Statisk server kører på http://localhost:${PORT}`);
});
