Function.prototype.myBind = function(context,...args) {
  if(this === Function.prototype) {
    return undefined;
  }
  // 返回一个绑定this的函数，所以需要保存当前this
  const _this = this;
  context = context || window;
  return function F() {
    if(this instanceof F) {
      console.log("11111");
      return new _this(context,...args);
    }
    return _this.call(context, ...args);
  }
}
var eatFish = function(age, gender) {
  console.log("吃鱼"); 
  console.log("this的指向=>");
  console.log(this.name);
  console.log(age);
  console.log(gender);
}
var dog = { 
  name: '旺旺'
};

var eat = eatFish.bind(dog, 18, '男');
new eat();
// eat();