/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 2 4 3 6 8 7 5
 */

function isPost(arr) {
  var root = arr[arr.length - 1];
  for(var i=0;i<arr.length-1;i++) {
    if(arr[i] > root) {
      break;
    }
  }
  for(let j=i;j<arr.length-1;j++) {
    if(arr[j] < root) {
      return false;
    }
  }
  var left = true, right = true;
  if(i > 0) {
    left = isPost(arr.slice(0, i));
  }
  if( i < arr.length -1) {
    right = isPost(arr.slice(i, arr.length -1));
  }
  return left && right;
}
var arr = [5,3,7,2,4,6,8];
var res = isPost(arr);
console.log(res);