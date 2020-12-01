# call、apply和bind

call和apply：改变this指针，让新的对象可以执行该函数。
bind：把方法绑定到一个对象中去执行，返回一个函数。功能和call和apply类似。

当第一个参数为undefined或null的时候，就会转变为window。

call() 和 apply() 唯一的区别就是传递的第二个参数不同。

call() 方法传递的第二个参数是以逗号隔开的参数项，apply() 方法传递的第二个参数是以数组的形式传参的。

### call
- 使用: 
```javscript
fun.call(this,A,B,C)
```
- 模拟实现call
```javascript
Function.prototype.myCall = function(context = window, ...args) {
  if(this === Function.prototype) {
    return undefined;
  }
  context = context || window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}
```

### apply
- 使用:
```javascript
fun.call(this,[A,B,C])
```
- 模拟实现apply
```javascript
Function.prototype.myApply = function(context = window, args) {
  if(this === Function.prototype) {
    return undefined;
  }
  context = context || window;
  context.fn = this;
  var result;
  if(Array.isArray(args)) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}
```

### bind
- bind 返回的是一个函数，传入的参数是以逗号隔开的参数项。
- 使用: 
```javascript
fun.bind(this,A,B,C)()
```
- 模拟实现bind
```javascript
Function.prototype.myBind = function(context, ...args) {
  if(this === Function.prototype) {
    return undefined;
  }
  const _this = this;
  return function F() {
    if(this instanceof F) {
      return new _this(...args);
    }
    return _this.apply(context, ...args);
  }
}
```
### 扩展：获取函数中的参数
- 获取argument对象，类数组对象，不能调用数组方法,可以通过arguments[i]获取到对应的值
```javascript
function test1() {
  console.log(arguments);
}
test1(1,2,3);
// [Arguments] { '0': 1, '1': 2, '2': 3 }
```

- 获取参数数组，可以调用数组方法
```javascript
function test2(...args) {
  console.log(args)
}
test2(1,2,3);
// [ 1, 2, 3 ]
```

- 获取除第一个参数以外的剩余参数数组
```javascript
function test3(first, ...args) {
  console.log(args);
}
test3(1,2,3);
// [2,3]
```




















