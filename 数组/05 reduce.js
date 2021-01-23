// 1.reduce实现累加器
var arr = [1,2,3,4,5,6,7,8,9,10,10];
var res = arr.reduce((t, v) => {
  t = t + v;
  return t;
}, 0);
console.log(res);
// 2. reduce实现累乘器
var res2 = arr.reduce((t, v) => v * t);
console.log(res2);
// 3. reduce实现数组反序
var res3 = arr.reduce((t, v) => {
  t.unshift(v);
  return t;
}, [])
console.log(res3);
// 4. reduce实现map
// map: 返回新数组
var res4 = arr.reduce((t, v) => {
  v = v * v;
  t.push(v);
  return t;
}, []);
console.log(res4);
// 5. reduce实现数组去重
var res5 = arr.reduce((t, v) => {
  if(!t.includes(v)) {
    t.push(v)
  }
  return t;
}, []);
console.log(res5);
