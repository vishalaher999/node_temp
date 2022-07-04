/*
this module provide many useful properties and methods to interact with the operating system & server as well
*/


const os = require('os');

// info about current user
const user = os.userInfo()
console.log(user)

// system uptime(total time of sytem start)
console.log("system uptime is ", os.uptime())

const currentOS = {
   name: os.type(),
   release: os.release(),
   total_mem: os.totalmem(),
   free_mem: os.freemem()
}
console.log(currentOS);