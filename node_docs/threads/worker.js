const {parentPort, workerData} = require('worker_threads');

console.log(`worker start to work: ${workerData}`);

parentPort.on('message', message => console.log(`got job to do: ${message}`))
parentPort.postMessage({name: 'worker'});

