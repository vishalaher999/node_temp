// Globals in node => there is no window objest at server side so we use globals variables to access them everywher in code

//following are globals varibales:

// __dirname => path to current direcotry
// _filename => file name
// require() => function to use modules(common js)
// module => info abput current module(file)
// process => info about env. where the progam executed( giant object of data)



console.log(__dirname)
console.log(__filename)

setInterval(() => {
   console.log("heyyyyyy")
   
}, 1000);

setTimeout(() => {
   console.log("time out")
}, 1000);