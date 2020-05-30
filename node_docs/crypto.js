const { Certificate } = require('crypto');
const fs = require('fs');
const path = require('path');

let cert = fs.readFileSync(path.join(__dirname, './res/cer2.cer'), 'utf8');
// console.log(cert);

try{
    const publicKey = Certificate.exportPublicKey(cert);
    console.log(publicKey);
}catch(e){
    console.log(e);
}

const dns = require('dns');

dns.lookup('www.baidu.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});