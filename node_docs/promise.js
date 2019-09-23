
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});

let pp = p1.then(() => p2);
console.log(pp === p2);
pp.then((p) => console.log(p === p2));
