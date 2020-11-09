// 根据二叉树的前序遍历和中序遍历求其后序遍历

var postTraverse = function(pre, vin) {
  if(pre.length == 0) {
    return null;
  } else if(pre.length == 1) {
    return pre[0];
  }
  var stack = [];
  var root = pre[0];
  var index = vin.indexOf(root);
  var vinLeft = vin.slice(0,index);
  var vinRight = vin.slice(index+1);
  var preLeft = pre.slice(1, index+1);
  var preRight = pre.slice(index+1);
  stack.push(postTraverse(preLeft, vinLeft));
  stack.push(postTraverse(preRight, vinRight));
  stack.push(root);
  return stack.flat(Infinity);
}

var pre = 'FDXEAG', vin = 'XDEFAG';
var res = postTraverse(pre, vin).join('');
console.log(res);
