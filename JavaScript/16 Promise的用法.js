function getNumber() {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var num = Math.round(Math.random()*10);
      if(num > 5) resolve(num);
      else reject('数字太小');
    }, 2000)
  })
  return p;
}
// getNumber().then(data => {
//   console.log("resolve");
//   console.log(data);
// }).catch(err => {
//   console.log("rejected");
//   console.log(err);
// })
getNumber().then(data => {
  console.log("resolved");
  console.log(data);
}, err => {
  console.log("rejected");
  console.log(err);
}).catch(err => {
  console.log("lllllllllllll");
  console.log(err);
}) 