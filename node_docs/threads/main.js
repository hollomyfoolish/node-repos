const {Worker} = require('worker_threads');
const path = require('path');

let workerData = {
    name: 'foo'
};

let worker = new Worker(path.join(__dirname, './worker.js'), {workerData: workerData});
worker.on('error', err => console.log(err));
worker.on('message', message => console.log(`get message from woker: ${message}`));
worker.on('exit', code => console.log(`worker exit: ${code}`));