let arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => [x, x * 2]).flat());
console.log(arr.flatMap(x => [x, x * 2]));

let descs = Object.getOwnPropertyDescriptors(Object);
for(let name in descs){
    console.log(`${name}: enumerable - ${descs[name].enumerable}`);
}

const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
}

console.log(Object.entries(obj));

let map = new Map([['name', 'Tom'], ['age', 18]]);
for(let e of map){
    console.log(e);
}
let arr2 = ['Jim', 'Terry'];
let [v1, v2] = arr2;
console.log(`${v1}, ${v2}`);


Promise.resolve().then(() => console.log('promise done'));
console.log('promise start');