var promiseAll = promises => {
  var values = new Array(promises.length);
  var num = 0;
  return new Promise((resolve, reject) => {
    for(let i=0;i<promises.length;i++) {
      var promise = promises[i];
      promise.then(val => {
        values[i] = val;
        num++;
        if(num === promises.length) resolve(values);
      }).catch(err => {
        reject(err);
      })
    }
  })
}
var p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('p1任务');
  }, 1000)
})
var p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('p2任务')
  }, 300);
})
promiseAll([p1, p2]).then(val => {
  console.log(val);
  console.log("---------------------");
}).catch(err => {
  console.log(err);
})
Promise.all([p1,p2]).then(val => {
  console.log(val);
}).catch(err => {
  console.log(err);
})