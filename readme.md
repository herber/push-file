# Push-file

> Push-file makes file uploads a breeze.

Push-file handles all the client side file upload so, so you don't have to.

## Installation

```javascript
npm install --save push-file
```
## Usage

```javascript
const pushFile = require ('push-file');

pushFile('serverurl.com', 'filepath.md', function (err, body) {
    if (err) {
        // Do something with the error.
    } else {
        // yay!! It worked.
    }
});
```

That's how easy it is to upload a file with **push-file**
