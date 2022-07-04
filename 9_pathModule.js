/*
Path module
provide the properties & methods for working with the file & directory path
*/


const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/', 'sub_content', 'text.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const abs = path.resolve(__dirname,'content','sub_content', 'text.txt');
console.log(abs);