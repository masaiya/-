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
/** 0, 1, 2, 3, 4, 6, 10, 11, 13
 *  l                      r
 */
var array = [0, 1, 2, 3, 4, 6, 10, 11, 13];
var S = 6;

var res = FindNumbersWithSum(array, S);
console.log(res);