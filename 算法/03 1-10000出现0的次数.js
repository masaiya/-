function computeZeroTime(num) {
  var string;
  var reg = /0/g;
  var result = 0;
  for(let i=1;i<=num;i++) {
    string = i.toString();
    let arr = string.match(reg);
    if(arr) 
      result += arr.length;
  }
  return result;
}
console.log(computeZeroTime(100));