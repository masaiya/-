function quickSort(arr) {
  return quick(0, arr.length - 1, arr);
}
function quick(left, right, arr) {
  var i = left + 1;
  var j = right;
  var base = arr[left];
  if(arr.length <= 1) return;
  if(left >= right) return;
  while(i < j) {
    while(i < j && arr[j] >= base)  j--;
    while(i < j && arr[i] < base)  i++;
    if(i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  arr[left] = arr[i];
  arr[i] = base;
  // var leftArr = arr.slice(left, i);
  // var rightArr = arr.slice(i+1, right);
  leftArr = quick(left, i-1, leftArr);
  rightArr = quick(i+1, right, rightArr);
  return arr;
}
/**
 * left              right
 * 0  1  2  3  4  5  6
 * 49 38 65 97 13 27 49
 * b     i        j
 * 49 38 27 97 13 65 49
 * b        i  j  
 * 49 38 27 13 97 65 49
 * b        ij  
 * 13 38 27 49 97 65 49
 * b        ij  
 */
var arr = [49, 38, 65, 97, 13, 27, 49];
console.log(quickSort(arr));