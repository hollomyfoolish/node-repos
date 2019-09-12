const path = require('path');
const fs = require('fs');

let codepath = path.resolve(__dirname, './res/customer.code');
fs.readFile(codepath, 'utf8', (err, data) => {
    if(err){
        console.log(er);
        return;
    }

    let s = `function(send, cname){${data}}`;
    let func = function(msg){
        console.log(`receive message from customer code: ${msg}`);
    }
    let sf;
    eval(`sf = ${s}`);
    sf(func, '_hello_');

    console.log(data);
});

const vm = require('vm');

const x = 1;
const foo = function(){
    console.log('foo from host');
}
const sandbox = {
    x: 2,
    foo: foo,
    setTimeout: setTimeout
 };
vm.createContext(sandbox); // Contextify the sandbox.

const code = `
    x += 40;
    var y = 17;
    foo();
    console.log("I am in a sandbox");
    while(true){}
    setTimeout(foo, 2000);
`;
// `x` and `y` are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
// vm.runInContext(code, sandbox);
// console.log(sandbox.x); // 42
// console.log(sandbox.y); // 17
// console.log(x); // 1; y is not defined.

const script = new vm.Script(code);
const cache1 = script.createCachedData();
try{
    script.runInContext(sandbox, {
        timeout: 20000,
        breakOnSigint: true
    });
}catch(e){
    console.log(e)
}
console.log(sandbox.x); // 42
console.log(sandbox.y); // 17
const cache2 = script.createCachedData();

// new vm.Script(code, {
//     cachedData: cache2
// }).runInContext(sandbox);
// console.log(sandbox.x); // 42
// console.log(sandbox.y); // 17

const clazz = {
    Foo: function(){
        if (!(this instanceof clazz.Foo)){
            throw new Error('should use new contructor');
        }
    }
};
try{
    clazz.Foo();
}catch(e){
    console.log(e);
}
try{
    new clazz.Foo();
}catch(e){
    console.log(e);
}