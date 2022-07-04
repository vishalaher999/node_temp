/* modules in js 

1) common js, every file is a module(by default)
2) modules => it is encapsulated code(only share minimum)

*/

const names = require('./4_moduleVar')
const Hello = require('./5_moduleFunction')
const data = require('./6_alternateWayOfModuleExport')
const add = require('./7_autoFunModule')
console.log(names);

Hello("vishal")

console.log(data.SinglePerson)
console.log(data);