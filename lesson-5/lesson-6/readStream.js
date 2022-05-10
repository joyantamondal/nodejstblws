const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message"></input></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream Finish');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            res.write('Thank you');
            res.end();
        });
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');
