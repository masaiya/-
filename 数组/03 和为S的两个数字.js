function FindNumbersWithSum(array, sum) {
  if(array && array.length > 0) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
      let num = array[left] + array[right];
      if(num === sum) {
        return [array[left], array[right]];
      } else if(num > sum) {
        right --;
      } else if(num < sum) {
        left ++;
      }
    }
    return [];
  }
  return null;
}
function FindNumbersWithSum(arr, sum) {
  if(arr && arr.length > 1) {
    var left = 0, right = arr.length - 1;
    while(left < right) {
      var num = arr[left] + arr[right];
      if(num == sum) return [arr[left], arr[right]];
      else if(num < sum) left ++;
      else right --;
    }
    return null;
  }
}
var array = [0, 1, 2, 3, 4, 6, 10, 11, 13];
var S = 15;

var res = FindNumbersWithSum(array, S);
console.log(res);