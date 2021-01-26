function quickSort(arr) {
  return quick(arr, 0, arr.length-1);
}
function quick(arr, start, end) {
  if(start <= end) return [];
  var base = arr[start];
  var left = start, right = end;
  while(left < right) {
    while(left < right && arr[right] > base) right --;
    arr[left] = arr[right];
    while(left < right && arr[left] < base) left ++;
    arr[right] = arr[left];
  }
  arr[left] = base;
  quick(arr, start, left - 1);
  quick(arr, left + 1, end);
  return arr;
}
var arr = [14,25,17,10,2,48,13,15,4,49,11];
console.log(quickSort(arr));