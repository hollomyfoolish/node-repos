const tests = [];
let _beforeEach = null;

add = function(fn){
    tests.push(fn);
};

beforeEach = function(fn){
    _beforeEach = fn;
};

execute = function(){
    tests.forEach((fn) => {
        _beforeEach && _beforeEach();
        fn();
    });
}
describe = function(desc, spec){
    console.log('start test suit: ' + desc);
    spec();
    execute();
}