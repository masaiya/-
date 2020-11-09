class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var rebuildBinaryTee = function(pre, vin) {
  if(pre.length == 0) {
    return null;
  } else if(pre.length == 1) {
    return new Node(pre[0]);
  }
  var root = pre[0];
  var index = vin.indexOf(root);
  var vinLeft = vin.slice(0, index);
  var vinRight = vin.slice(index+1);
  var preLeft = pre.slice(1, index+1);
  var preRight = pre.slice(index+1);
  const node = new Node(root);
  node.left = rebuildBinaryTee(preLeft, vinLeft);
  node.right = rebuildBinaryTee(preRight, vinRight);
  return node;
}
var pre = [1,2,4,7,3,5,6,8], vin = [4,7,2,1,5,3,8,6];

var res = rebuildBinaryTee(pre, vin);
console.log(res);
