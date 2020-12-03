function add(num1, num2) {
  if(num1 === 0) return num2;
  if(num2 === 0) return num1;
  return add(num1 ^ num2, (num1 & num2) << 1);
}


var res = add(99, 98);
console.log(res);