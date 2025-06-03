const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const app = require('../server');

let server;

function request(path, method, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      port: server.address().port,
      path,
      method,
      hostname: 'localhost',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    };
    const req = http.request(options, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: raw }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

test.before(() => {
  server = app.listen(0);
});

test.after(() => {
  server.close();
});

test('POST /api/chat sem mensagem retorna 400', async () => {
  const res = await request('/api/chat', 'POST', {});
  assert.equal(res.status, 400);
  const parsed = JSON.parse(res.body);
  assert.ok(parsed.error);
});
