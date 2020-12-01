// 深拷贝
// 1. 手动实现深拷贝
function deepClone(obj) {
  var objClone = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === 'object') {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        if(obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}

// 2. 通过JSON来实现
function deepClone1(obj) {
  let _obj = JSON.stringify(obj);
  let objClone = JSON.parse(_obj);
  return objClone;
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = deepClone1(obj1);
obj2.a = 9;
obj2.c.d = 99;
console.log(obj1);
console.log(obj2);
