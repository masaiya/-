// 只复制第一层的浅拷贝


// 1. 通过遍历实现
function simpleCopy(obj1) {
  var obj2 = Array.isArray(obj1) ? [] : {};
  for(let i in obj1) {
    obj2[i] = obj1[i];
  }
  return obj2;
}
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = simpleCopy(obj1);
obj2.a = 9;
obj2.c.d = 99;
console.log(obj1);
console.log(obj2);

// 2. 通过Object.assign()实现
var obj3 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj4 = Object.assign({}, obj3);
obj4.a = 9;
obj4.c.d = 99;
console.log(obj3);
console.log(obj4);