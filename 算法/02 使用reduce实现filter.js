// 使用reduce使用filter
var arr = [1,2,3,4,5,6];

var res = arr.filter(function(item) {
  // this();
  return item > 3;
}, function() {
  console.log("111");
});
// console.log(res);


Array.prototype.myFilter = function(fn, callback) {
  var result = [];
  var _this = callback || null;
  this.reduce((prev, curr, index, arr) => {
    fn.call(_this, curr, index, arr) ? result.push(curr) : null;
  }, null)
  return result;
}

var res = arr.myFilter(function(item) {
  this();
  return item > 4
}, function() {
  console.log("1111");
});
console.log(res);