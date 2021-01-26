function bubbleSort(arr) {
  for(let i=0;i<arr.length-1;i++) {
    for(let j=0;j<arr.length-i-1;j++) {
      if(arr[j]>arr[j+1]) 
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  return arr;
}
var arr = [5, 8, 7, 4, 10, 1, 5, 9, 2];
console.log(bubbleSort(arr));