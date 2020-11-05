function binarySearch(arr, data) {
  var start = 0, end = arr.length - 1;
  var mid;
  while(start <= end) {
    mid = Math.floor((start+end) / 2);
    if(arr[mid] == data) {
      return mid;
    } else if(arr[mid] > data) {
      end = mid - 1;
    } else{
      start = mid + 1;
    }
  }
  return -1;
}

var arr = [1,3,5,6,8,9,10,15,19,20];
var res1 = binarySearch(arr, 1);
var res2 = binarySearch(arr, 9);
var res3 = binarySearch(arr, 15);

console.log(res1);
console.log(res2);
console.log(res3);
