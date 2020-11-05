// deep(): 返回树的深度
BinarySearchTree.prototype.deep = function() {
  var deep = this.deepTree(this.root, 0);
  return "deep: "+deep;
}
BinarySearchTree.prototype.deepTree = function(node, deep) {
  if(node == null) {
    return deep;
  }
  if(node) {
    deep ++;
  }
  var leftDeep = this.deepTree(node.left, deep);
  var rightDeep = this.deepTree(node.right, deep);
  return Math.max(leftDeep, rightDeep);
}