/*
    Push-file (a nodejs package for uploading files)
    npmjs.com/push-file
    github.com/withtobi/push-file
    
    by Tobi<github.com/withtobi>
    
    licence: MIT
*/

// require dependencies
const validUrl = require('valid-url');
const fs = require('fs');
const request = require('request');

// export push-file function
module.exports = function (url, path, cb) {
    // if there is an error
    var cbErr = '';
    
    // the callbacks body parameter(will be changed if there is no error)
    var body = 'Error';
    
    // validate url
    if (validUrl.isUri(url)){
        
        // check if file exists
        if (fs.existsSync(path)) {
            
            // send post request
            var req = request.post(url, function (err, resp, respBody) {
                // if error
                if (err) {
                    cbErr = 'error while uploading';
                } else {
                    body = respBody;
                }
            });
            
            var form = req.form();
            
            // upload file
            form.append('file', fs.createReadStream(path));
            
        } else {
            cbErr = 'path not found';
        }
        
    } else {
        cbErr = 'url is not valid';
    }
    
    // callback function
    cb(cbErr, body);
}