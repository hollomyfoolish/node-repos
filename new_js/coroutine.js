const fs = require('fs');
const path = require('path');

function* handleFile(){
    let data = yield;
    console.log(`handle file: ${data}`);
}

let handler = handleFile();
handler.next();
fs.readFile(path.join(__dirname, './data.txt'), {encoding: 'utf8'}, (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    handler.next(data);
});

