function reOrderArray(arr) {
  if(!arr) return [];
  var left = 0, right = arr.length - 1;
  while(left <= right) {
    while(arr[left] % 2 === 1) {
      left ++;
    }
    while(arr[right] % 2 === 0) {
      right --;
    }
    if(left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  return arr;
}
var array = [1,2,3,4,5,6,7,8,9,10];

var res = reOrderArray(array);

console.log(res);