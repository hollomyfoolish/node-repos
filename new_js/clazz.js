class Foo {
    constructor(){
        this.name = 'Foo';
    }

    sayHi(){
        console.log('Hi, I am Foo');
    }
}

class Too extends Foo{
    constructor(type){
        super();
        this.type = type;
    }

    dosth(){
        this.sayHi();
        console.log(`do something with ${this.type}`);
    }

    sayHi(){
        console.log('Hi, I am Too');
        super.sayHi();
    }
}

let t = new Too('doctor');
t.sayHi();
t.dosth();


const useState = function(oriValue){
    var _v = oriValue;
    _v.n = _v.n || 0;
    return [_v, function(fn){
        console.log(`old value: ${_v}`);
        _v = fn(_v);
        console.log(`new value: ${_v}`);
    }];
};

let [count, setCount] = useState({});
console.log(count.n);
setCount(n => {
    n.n++;
    return n;
});
console.log(count.n);