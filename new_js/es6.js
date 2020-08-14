// iterator

function makeRangeItertor(start = 0, end = Infinity){
    return {
        next: function(){
            if(start < end){
                start++;
                return {
                    value: start - 1,
                    done: false
                };
            }else{
                return {
                    value: start - 1,
                    done: true
                };
            }
        }
    }
}

let range10 = makeRangeItertor(0, 10);
let result = range10.next();
while(!result.done){
    console.log(result.value);
    result = range10.next();
}
console.log('--------------------------------');

let range5 = makeRangeItertor(0, 5);
result = range5.next();
while(!result.done){
    console.log(result.value);
    result = range5.next();
}
console.log('--------------------------------');

function * makeRangeItertor2(start = 0, end = Infinity){
    while(start < end){
        start++;
        yield (start - 1);
    }
}

range10 = makeRangeItertor2(0, 10);
let obj = {
    values: ['a', 'b', 'c'],
    *[Symbol.iterator](){
        for(let v of this.values){
            yield v;
        }
    }
};
console.log(makeRangeItertor2.toString());
// obj[Symbol.iterator] = function*(){
//     yield 1;
//     yield 2;
// };
for(let v of obj){
    console.log(v);
}
console.log('--------------for of------------------');

for(let v of range10){
    console.log(v);
}
console.log((range10[Symbol.iterator]).toString());

result = range10.next();
while(!result.done){
    console.log(result.value);
    result = range10.next();
}
console.log('--------------------------------');

var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) { 
    console.log(value); 
}

console.log('------------');

const capacity = 3;

function* consumer(){
    while(true){
        let items = yield;
        console.log(`consumer consume ${items} items`);
        
    }
}

let cc = consumer();
console.log(cc.send);
cc.next();
for(let i = 1; i <= 10; i++){
    console.log(`produce ${i} items`);
    cc.next(i);
}