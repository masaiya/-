function printMinNumber(numbers) {

}

var numbers = [3, 34, 321];
console.log(numbers.sort(compare).join(''));

function compare(a, b) {
  let front = ""+a+b;
  let behind = ""+b+a;
  console.log("front:" + front +"  behind::" +behind);
  console.log(front - behind);
  return front - behind;
}






