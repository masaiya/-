Function.prototype.myCall = function(context = window, ...args) {
  // 用于防止 Function.prototype.myCall() 直接调用
  if(this === Function.prototype) {
    return undefined;
  }
  context = context || window;
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
}


var eatFish = function(age, gender){
  console.log("吃鱼");
  console.log("this的指向=>");
  console.log(this.name);
  console.log(age);
  console.log(gender);
}
var dog = {
	name:"汪汪"
}

eatFish.myCall(dog, 18, '男');