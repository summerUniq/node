
function somethingComplicated(params) {
    console.log('somethingComplicated'+ params);
}
function compute() {
    console.log('compute');
    
}
function doSomething(args, callback) {
    somethingComplicated(args)
    process.nextTick(callback)
    // callback()
}   
doSomething('111111111111111', function onEnd(){
    compute()
})

console.log('dosomething end');



