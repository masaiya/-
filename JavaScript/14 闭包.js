// 如果在一个内部函数里，对在外部作用域的变量进行引用，那么内部函数就被认为是闭包(closure)
var makeCounter = (function() {
  var privateCount = 0;
  function changeBy(val) {
    privateCount += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCount;
    }
  }
})()

makeCounter.value();
makeCounter.increment();
makeCounter.increment();
// console.log(makeCounter.value());
var count2 = makeCounter;



function funA() {
  var a = 10;
  return function() {
    console.log(a);
  }
}
var b = funA();
// b();

function outerFn() {
  var i = 0;
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn;
}

// 每次外部函数执行的时候，都会开辟一块内存空间，外部函数的地址不同，都会重新创建一个新的地址。
var inner = outerFn();
// inner();
// inner();
// inner();  // 123
var inner2 = outerFn();
// inner2();
// inner2();
// inner2(); // 123

var i = 0;
function outerFn() {
  function innerFn() {
    i++;
    console.log(i);
  }
  return innerFn;
}
var inner1 = outerFn();
var inner2 = outerFn();
// inner1();
// inner2();
// inner1();
// inner2(); // 1234

// console.log(i); // 4



function outerFn(){
  var i = 0;
  function innnerFn(){
      i++;
      console.log(i);
  }
  return innnerFn;
}
var inner1 = outerFn();
var inner2 = outerFn();
// inner1();
// inner1(); // 12
// inner2();
// inner2(); // 12
  


// (function() { 
//   var m = 0; 
//   function getM() { return m; } 
//   function seta(val) { m = val; } 
//   window.g = getM; 
//   window.f = seta; 
// })(); 
// f(100);
// console.log(g());  // 100



var add = function(x) { 
  var sum = 1; 
  var tmp = function(x) { 
    sum = sum + x; 
    return tmp;    
  } 
  tmp.sum = function() { 
    return sum; 
  }
  return tmp; 
} 
// console.log(add(1)(2)(3)(10).sum());  

function love1(){
  var num = 223;
  var me1 = function() {
    console.log(num);
  }
  num++;
  return me1;
}
var loveme1 = love1();
// loveme1();   //输出224
// loveme1();


function fn(){
  var arr = [];
  for(var i = 0;i < 5;i ++){
    // arr[i]()在调用的时候才会返回i，但是i在循环后变成了5
    arr[i] = function(){
      return i;
    }
  }
  return arr;
}
var list = fn();
// console.log(list[0]())
// for(var i=0,len=list.length; i<len; i++){
//   console.log(list[i]());
// }

var name = "The Window";
var object = {
　name : "My Object",
　getNameFunc : function(){
　　return function(){
　　  return this.name;
　  };
　}
};
// console.log(object.getNameFunc()());

var name = "The Window";
var object = {
　name : "My Object",
　getNameFunc : function(){
　　var that = this;
　　return function(){
　　　return that.name;
　　};
　}
};
console.log(object.getNameFunc()());