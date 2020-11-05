// remove(val): 删除val节点
BinarySearchTree.prototype.remove = function(val) {
  // 如果不存在该节点，直接返回false
  if(!this.search(val)) return false;
  this.removeNode(this.root, val);
}
BinarySearchTree.prototype.removeNode = function(node, val) {
  if(node == null) {
    return null;
  }
  if(node.val > val) {
    node.left = this.removeNode(node.left, val);
  } else if(node.val < val) {
    node.right = this.removeNode(node.right, val);
  } else {
    // 找到要删除的节点
    // 如果要删除的节点是叶子节点，则直接让该节点为null
    if(node.left == null && node.right == null) {
      node = null;
    }
    // 要删除的节点有一个子节点，则把要删除的节点换成它的子节点
    // 如果要删除的节点只有左子节点，则直接把该节点替换为它的左子节点
    else if(node.right == null) {
      node = node.left;
    }
    // 如果要删除的节点只有右子节点，则直接把该节点替换为它的右子节点
    else if(node.left == null) {
      node = node.right;
    }
    // 要删除的节点有两个子节点,选择左子树里最大的节点或右子树里最小的节点，用这个节点的值替换要删除的节点
    // 这里我选择左子树里最大的节点
    else {
      // 找到要删除的节点的左子树里最大的值
      var leftMax = this.maxNode(node.left);
      // 让要删除的节点的值等于它的左子树的最大值
      node.val = leftMax;
      // 让要删除的节点的左子树里面删除它的最大值
      node.left = this.removeNode(node.left, leftMax);
    }
  }
  return node;
}