var a = 0.1;
var b = 0.15987488;
console.log(a+b);
function add(num1, num2) {
  var baseNum, baseNum1, baseNum2;
  try {
    baseNum1 = num1.toString().split('.')[1].length;
  } catch {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split('.')[1].length;
  } catch {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  return (num1*baseNum+num2*baseNum) / baseNum;
}
var result = add(0.1, 0.15987488);
console.log(result);