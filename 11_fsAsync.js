/*
Async type=> non blocking with callback function( this fun will run once done)
*/
//if we forget to give utf then it will give as buffer


const fs = require('fs')

console.log("start");

fs.readFile('./content/first.txt','utf8',  (err, result)=>{
  if(err){
   console.log(err)
   return
  }
  const first = result;
  console.log(first);

  fs.readFile('./content/second.txt','utf8', (err,result)=>{
   if(err){
      console.log(err)
      return
   }
   const second = result;
   console.log(second)

fs.writeFile('./content/fourth.txt', first,(err, result)=>{
   if(err){
      console.log(err)
      return
   }
   console.log(result);
   console.log("done with the task");
})

  })

})

console.log("starting new task");


// alternative to this callback is promises/async await 