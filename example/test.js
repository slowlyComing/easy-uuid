import {randomUUID,timestampRandomMd5UUID } from "./src/generate.js";
// generate 32
const uuid32 = randomUUID(32);
console.log('32 位 UUID:', uuid32);

// generate 16
const md5UUID = timestampRandomMd5UUID();
console.log('md5 uuid:', md5UUID);
