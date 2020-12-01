function quickSort(array) {
  return quick(0, array.length-1,array);
}

function quick(start, end, array) {
  var base = array[start];
  var left = start + 1;
  var right = end;
  if(array.length <= 1) return;
  if(left >= right) return;
  while(left < right) {
    while(array[right] >= base && left < right) {
      right --;
    }
    while(array[left] < base && left < right) {
      left ++;
    }
    if(left < right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  } 
  array[start] = array[left];
  array[left] = base;
  console.log(array);
  console.log(start);
  console.log(left-1);
  console.log(end);
  quick(start, left-1, array);
  quick(left+1, end, array);
  return array;
}
//         b
// 1,7,3,6,8,59,65,14,18,48,9,84,159
// l       r
var array = [8,7,9,48,1,59,65,14,18,7,3,84,159];
var res = quickSort(array);
console.log(res);
