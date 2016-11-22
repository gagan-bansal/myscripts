var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
    /*if (req.headers.host === 'stmh.com') {
        bounce(3001);
    }*/
    if (req.headers.host === 'www.stmh.com') {
        bounce(3000);
    }
    else if (req.headers.host === 'adodson.com') {
        bounce(5000);
    }
    else if (req.headers.host === 'auth-server.com') {
        bounce(3002);
    }
    else if (req.headers.host === 'node-test.com') {
        bounce(7357);
    }
    else {
        res.statusCode = 404;
        res.end('no such host: '+ req.headers.host);
    }
});
server.listen(80);
