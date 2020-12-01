// 数组去重

var array = [1,2,1,3,8,4,5,7,3,2];

// 1. 利用Set去重
var arr1 = new Set(array);
// console.log(arr1);

// 2. 利用双重for循环和splice去重
function unique(array) {
  for(let i=0;i<array.length;i++) {
    for(let j=i+1;j<array.length;j++) {
      if(array[i] === array[j]) {
        array.splice(j,1);
      }
    }
  }
  return array;
}
// var arr2 = unique(array);
// console.log(arr2);

// 3. 利用indexOf去重
function unique2(array) {
  var arr = [];
  for(let key of array) {
    if(arr.indexOf(key) >= 0) {
      continue;
    }
    arr.push(key);
  }
  return arr;
}
var arr = unique2(array);
console.log(arr);