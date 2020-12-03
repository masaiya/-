var quickSort = function(array) {
  return quick(array, 0, array.length - 1);
}

var quick = function(array, start, end) {
  var base = array[start];
  var i = start + 1;
  var j = end;
  if(end - start < 1) return ;
  while(i < j) {
    while(array[j] >= base && i < j) {
      j--;
    }
    while(array[i] < base && i < j) {
      i++;
    } 
    if(i < j) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  array[start] = array[i];
  array[i] = base;
  quick(array, start, i-1);
  quick(array, i+1, end);
  return array;
}

// 5, 1, 2, 3, 4, 9, 8, 7, 6
// 4, 1, 2, 3, 5, 9, 8, 7, 6
var array = [5,6,7,8,9,4,3,1,2];
var res = quickSort(array);
console.log(res);