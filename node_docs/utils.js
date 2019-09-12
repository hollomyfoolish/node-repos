console.log(process.env.NODE_DEBUG);
const logger = makeLogger('debug');

logger('hi there, it\'s foo-bar [%d]', 2333);
