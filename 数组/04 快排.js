function quick(arr) {
  return quickSort(arr, 0, arr.length - 1);
}
function quickSort(arr, start, end) {
  if(start >= end) return [];
  var base = arr[start];
  var left = start, right = end;
  while(left < right) {
    while(left < right && arr[right] > base) right--;
    arr[left] = arr[right];
    while(left < right && arr[left] <= base) left ++;
    arr[right] = arr[left];
  }
  arr[left] = base;
  quickSort(arr, start, left-1);
  quickSort(arr, left+1, end);
  return arr;
}
var array = [5,6,7,8,9,4,3,1,2];
var res = quick(array);
console.log(res);