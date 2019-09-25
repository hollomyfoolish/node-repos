const utils = {
    isUserOldEnough: (age) => age >= 18
};

setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('resolved'));
process.nextTick(() => console.log('next tick'));
console.log('start');
module.exports = utils;