import server from "../dist/server/server.js";

export default async function handler(req, res) {
  const baseUrl = `http://${req.headers.host ?? "localhost"}`;
  const request = new Request(new URL(req.url, baseUrl).toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });

  const response = await server.fetch(request, undefined, undefined);

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  const buffer = await response.arrayBuffer();
  res.end(Buffer.from(buffer));
}
