require('./env');
const util = require('util');

function makeLogger(level){
    return util.debuglog(level);
}

const loggerLevels = {
    debug: 1,
    info: 2,
    warn: 3,
    eror: 4,
};
const loggers = {};
for(let name in loggerLevels){
    if(loggerLevels.hasOwnProperty(name)){
        loggers[name] = makeLogger(name);
    }
}

const simpleLogger = function(){
    
}

module.exports = simpleLogger;