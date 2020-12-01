function disOrder(array) {
  var current = array.length - 1;
  let random;
  while(current > -1) {
    random = Math.floor(array.length * Math.random());
    [array[current], array[random]] = [array[random], array[current]];
    current --;
  }
  return array;
}

var array = [1,2,3,4,5,6,7,8];
console.log(disOrder(array));