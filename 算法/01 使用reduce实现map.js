// map 遍历数组的每一项，并且执行回调函数的操作，返回一个对每一项进行操作后的新数组
const arr1 = [1,2,3,4,5]
const arr2 = [1,1,1]
// arr1.map(function(item,idx,arr){
//   console.log(item, idx, arr);
//   this(item);
// },function(item) {
//   console.log(item * 2);
// })


// 使用reduce实现map
Array.prototype.myMap = function(fn, callback) {
  var result = [];
  var _this = callback || null;
  this.reduce(function(prev, curr, index, array) {
    result.push(fn.call(_this, curr, index, array));
  }, null)
  return result;
}
var res = arr1.myMap(function(item, index, arr) {
  console.log(item, index, arr);
  this(item);
  return 2 * item;
}, function(item) {
  item = item * 2;
});
console.log(res);