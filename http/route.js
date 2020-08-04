const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });

    if (request.method === "GET") {
        if (request.url === "/") {
            response.write("index sayfasındasınız.");
        } else if (request.url === "/iletisim") {
            response.write("iletişim sayfasındasınız");
        } else {
            response.write("bu sayfa bulunamadı.");
        }
    }
    response.end();

});

server.listen(4200);