// 1.setTimeout第一个参数传参
var f1 = function(n) {
  return function() {
    console.log(n);
  }
}
var fun = f1(100);
// setTimeout(fun, 2000);

// 2. 循环遍历闭包
for(var i=0;i<5;i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
} 