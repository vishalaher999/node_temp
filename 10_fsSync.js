/*
fs module
sync => blocking
async => non blocking

*/

const {readFileSync, writeFileSync} = require('fs')
// or
// const fs = require('fs');

/*
Fs with sync = blocking type
*/

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log("start")

console.log(first,second);

writeFileSync(
   './content/third.txt',
   'here is the result: '

)

console.log("done");
console.log("start new tasks");