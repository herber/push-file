const pushFile = require ('push-file');

console.log(__dirname + 'text.txt');

pushFile('http://localhost/profile', __dirname + '/test.txt', function (err, body) {
    if (err) {
        console.log(err);
    } else {
        console.log('YAYYY');
    }
});