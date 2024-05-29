///fetch('https://somthing.in').then().catch().finally()
//promise creation
const promisone=new Promise(function(resolve, reject){
// Do an async task, DB call,network etc.
    setTimeout(function(){
console.log("Async task completed");
resolve()
    },2000)
})

promisone.then(function(){
    console.log("Promise consumed");
})