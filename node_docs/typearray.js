// create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]

const buffer = Buffer.alloc(10);

console.log(`buffer instanceof Uint8Array: ${buffer instanceof Uint8Array}`);
console.log(`buffer instanceof Int8Array: ${buffer instanceof Int8Array}`);