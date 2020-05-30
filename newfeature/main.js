const fs = require('fs');

class Foo{
    constructor(name){
        this.name = name;
    }
    set age(a){
        this._age = a;
    }
    get age(){
        return this._age;
    }
    description(){
        return `${this.name} - ${this._age}`;
    }
}

let foo = new Foo('Foo');
foo.age = 13;
console.log(foo.description());

class Too extends Foo{
    constructor(n){
        super(n);
        this.type = 'Too';
    }

    toString(){
        return super.description() + '-' + this.type;
    }
}

let too = new Too('Too');
too.age = 14;
console.log(too.toString())


let target = {
    name: 'Foo',
    description: function(){
        return `I am ${this.name}`
    }
}

// Object.preventExtensions(target);
Object.seal(target);
// Object.freeze(target);

target.foo = 'extended foo';
console.log(target.foo);
console.log(Object.isExtensible(target));
console.log(Object.isFrozen(target));
console.log(Object.isSealed(target));

setTimeout(() => console.log('timeout'));
Promise.resolve().then(() => console.log('promise done'));
new Promise((resolve, reject) => {
    resolve()
}).then(() => console.log('promise done2'))
fs.writeSync(1, 'fs writeSync\n');
console.log('done');

console.log('main');

process.nextTick(function() {
    console.log('nextTick')
});

new Promise(function(resolve, reject) {
    resolve();
}).then(function() {
    console.log('promise.then');
});