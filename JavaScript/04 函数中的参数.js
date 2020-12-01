function test1() {
  // 获取到arguments对象，类数组对象，但是不能调用数组方法
  console.log(arguments);
  console.log(arguments[1]);
}
// test1(1,2,3);

function test2(...args) {
  // 获取到参数数组，可以调用数组方法 
  console.log(args);
}
test2(1,2,3);

function test3(first, ...args) {
  // 获取出第一个参数的剩余参数数组
  console.log(first);
  console.log(args);
}
// test3(1,2,3);

function test4(first, ...args) {
  fun(args);
  fun(arguments);
}
function fun() {
  console.log("透传：" ,...arguments);
}
// test4(1, 2, 3);