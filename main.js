const http = require('http');
const url  = require('url');

http.createServer((req, res) => {
    const number = url.parse(req.url, true)
                      .query
                      .number;

    if (!/^[0-9]+$/.test(number))
        throw "Not a number!";

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`"${number}"`);
}).listen(8000);
