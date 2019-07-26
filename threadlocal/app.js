if (!process.addAsyncListener) require('async-listener');

const fs = require('fs');
const path = require('path');

// const util = require('util')
// console.log(util)
// console.log(typeof process.addAsyncListener)
// console.log(typeof process.createAsyncListener)
// console.log(typeof process.addListener)

let idx = 0;
let threadLocal = {
    active: {},
    set: (key, value) => threadLocal.active[key] = value,
    get: key => threadLocal.active[key]
};
process.addAsyncListener({
    create: () => {
        idx++;
        fs.writeSync(1, `create idx: ${idx}\n`);
        try{
            if(!threadLocal.active.hasOwnProperty('name')){
                threadLocal.active.name = 'No.' + idx;
            }
            fs.writeSync(1, `create threadLocal.active.name: ${threadLocal.active.name}\n`);
        }catch(e){
            fs.writeSync(1, `error in create: ${e}\n`);
        }
        return threadLocal.active;
    },
    before: (context, storage) => { 
        if (storage) {
            threadLocal.active = storage;
            fs.writeSync(1, `before threadLocal.active.name: ${threadLocal.active.name}\n`);
      }
    },
    after: (context, storage) => {
        fs.writeSync(1, `after threadLocal.active.name: ${storage.name}\n`);
        if (storage) {
            threadLocal.active = {};
        }
    }
  });

//   setTimeout(() => {
//     setTimeout(() => {
//     }, 5000);
//   }, 2000);

  Promise.resolve().then(() => {
      return new Promise((resolve, reject) => {
          fs.readFile(path.resolve(__dirname, './package-lock.json'), 'utf-8', (data, err) => {
              if(err){
                  reject(err);
              }else{
                  resolve(data);
              }
          })
      });
  }).then(data => {
      fs.writeSync(1, data);
  }).catch(err => fs.writeSync(1, err));

// console.log(path.resolve(__dirname, './package-lock.json'))

//   new Promise((res, rej) => {
//       setTimeout(() => res(100), 1000);
//   }).then((d) => {
//       fs.writeSync(1, `in promise then ${d}\n`);
//   })

//   Promise.resolve().then(() => {
//     console.log(`promise: ${threadLocal.get('value')}`);
//     threadLocal.set('value', 'promise.resolve')
//   }).then(() => {
//     setTimeout(() => {
//         console.log(`promise setTimeout: ${threadLocal.get('value')}`);
//         threadLocal.set('value', 'Promise setTimeout');
//       }, 500);
//   });

//   Promise.resolve().then(() => console.log('Promise')).then(() => {
//     setTimeout(() => console.log('setTimeout in promise'), 2000);
//   });