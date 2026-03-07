// Visit this site as extra work: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

const http = require("node:http");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(req);
  const {url, method} = req;
  if(url === "/" && method === "GET"){

  }
  res.end("Hello this is written by write")

})

server.listen(port, host, ()=>{
  console.log(`Server is running on port ${host}:${port}`);
})