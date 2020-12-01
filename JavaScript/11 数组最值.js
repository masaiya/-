// 数组最值

// 1. reduce
var array = [1,99,11,232,321,42,59,22,44]
var res = array.reduce((prev, cur) => {
  return Math.max(prev,cur);
})
// console.log(res);

var res = Math.max(...array);
console.log(res);