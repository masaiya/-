// new操作符
// 创建一个空对象obj
// 设置原型链 即 obj . _proto _ = 构造函数.prototype ;
// 让构造函数中的this指向obj
// 返回对象obj

function myNew() {
  // 1. 创建一个空对象
  var obj = {};
  // 2. 截取arguments第一个参数为构造函数
  var fn = [].shift.call(arguments);
  // 3. 将obj的__proto__连接到构造函数fn的原型链上
  obj.__proto__ = fn.prototype;
  // 4. result接收构造函数执行的结果
  var result = fn.call(obj, arguments);
  // 5. 如果构造函数返回的是一个对象，则返回对象，否则返回obj
  return typeof result === 'object' ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log("hello world " +this.name);
}
var pi = myNew(Person, "pipi", 18);
pi.say();
