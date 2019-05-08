const pro = new Promise(function(resolve, reject){
  resolve('resolve')
})



setTimeout(function() {
  console.log('timeout');
})

setImmediate(function A() {
  console.log('immediate');
})

pro.then(function(res){
  console.log('pro', res);
})
