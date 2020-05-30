const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, './web');

const form = new formidable.IncomingForm();
// var form = new formidable.IncomingForm();
form.uploadDir = folder;
form.keepExtensions = true;
form.maxFileSize = 20480 * 1024 * 1024;

const app = express();
app.use('/upload', function(req, res, next){
	if(req.headers['content-type'] && req.headers['content-type'].indexOf('multipart/form-data') >= 0){
		form.parse(req, function(err, fields, files) {
			// var filePath = files['files'].path;
			// fs.rename(filePath, path.join(filePath, '../record.wav'), function(err){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log('rename record success.')
			// 	}
            // });
            if(err){
                res.writeHead(500, {'content-type': 'text/plain'});
                res.end(`${err}received upload:\n\n`);
            }else{
                res.redirect('/upload.html');
            }
	    });
	    return;
	}
	next();
});
app.use(express.static(folder));

app.listen(1888, function(){
	console.log('app on port: 1888');
});