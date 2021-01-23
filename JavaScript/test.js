// 手动实现数组扁平化
// var flatArray = function(arr) {
//   var result = [];
//   for(let i of arr) {
//     if(Array.isArray(i)) {
//       result = result.concat(flatArray(i));
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// }
var flatArray = function(arr) {
  var result = [];
  for(let i of arr) {
    if(Array.isArray(i)) {
      result = result.concat(flatArray(i));
    } else {
      result.push(i);
    }
  }
  return result;
}
var flatten = function(arr) {
  return arr.reduce((prev, curr) => {
    if(Array.isArray(curr)) prev = prev.concat(flatten(curr));
    else prev.push(curr);
    return prev;
  }, [])
}

var arr = [1,2,[3,4,[5,6]]];
var result = flatten(arr);
console.log(result);