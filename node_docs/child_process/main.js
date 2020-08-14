const {spawn} = require('child_process');

const ls = spawn('ls', ['-lh', '/usr'], {
    // stdio: 'ignore'
});
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

const actions = [
    'Tom goes home',
    'Jimmy is back to work',
    'Jerry is playing game',
    'Hana did nothing'
];

const createJob = function(i){
    return function(){
        return `${i}: ${actions[i%actions.length]}`;
    };
}
let count = 10;
let jobs = [];
for(let i = 0; i < count; i++){
    jobs.push(createJob(i + 1));
}

jobs.forEach(j => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(j());
            resolve();
        });
    });
});


console.log('start');

