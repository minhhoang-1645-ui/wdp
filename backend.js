const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");

  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ message: "Frontend đã kết nối với backend." }));
    return;
  }

  response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`Backend đang chạy tại http://localhost:${port}`);
});