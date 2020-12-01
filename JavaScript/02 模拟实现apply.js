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

eatFish.myApply(dog, [18, '男'])