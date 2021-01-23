var promiseRace = promises => {
  return new Promise((resolve, reject) => {
    for(let i=0;i<promises.length;i++) {
      promises[i].then(val => {
        resolve(val);
      }).catch(err =>{
        reject(err);
      })
    }
  })
}

var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 任务");
  }, 1000);
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 任务");
  }, 300)
})
// promiseRace([p1,p2]).then(val => {
//   console.log(val);
// }).catch(err => {
//   console.log(err);
// })
// Promise.race([p1,p2]).then(val => {
//   console.log(val);
// }).catch(err => {
//   console.log(err);
// })


setTimeout(() => {
  console.log("1111");
}, 1000);

setTimeout(() => {
  console.log("2222");
}, 300);