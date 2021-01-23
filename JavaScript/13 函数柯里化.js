// 体会柯里化
function curryingCheck(reg) {
  return function(txt) {
    return reg.test(txt);
  }
}
var hasNumber = curryingCheck(/\d+/g);
var hasLetter = curryingCheck(/[a-z]+/g);
// console.log(hasNumber('test1'));  // true
// console.log(hasLetter('22111'));  // false

// add柯里化函数封装
function _add(...args) {
  var res = args.reduce((sum, i) => sum + i);
  return res;
}

function add(...args1) {
  var args = [...args1] || []; 
  var _this = this;
  return function(...args2) {
    if(args2.length === 0) {
      return _add.apply(_this, args);
    } else {
      args.push(...args2);
      return add.apply(_this, args);
    }
  }
}

// 封装通用柯里化函数
var currying = function(fn, ...args1) {
  var args = [...args1] || [];
  var _this = this;
  return function(...args2) {
    if(args2.length === 0) {
      return fn.call(_this, ...args);
    } else {
      args.push(...args2);
      return currying.call(_this, fn, ...args);
    }
  }
}
var res = currying(_add)(1,2)(3,4)(100)(1000);
console.log(res());

