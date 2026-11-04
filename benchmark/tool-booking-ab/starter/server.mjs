import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.writeHead(501, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('起始项目。请按确认的需求实现预约台。');
});

server.listen(Number(process.env.PORT ?? 4173), '127.0.0.1', () => {
  process.stdout.write(`BENCH_READY http://127.0.0.1:${server.address().port}\n`);
});
