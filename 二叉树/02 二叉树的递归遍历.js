  // 遍历
  // preOrderTraverse(): 先序遍历
  BinarySearchTree.prototype.preOrderTraverse = function(callback) {
    console.log("先序遍历：");
    this.preOrderTraverseNode(this.root, callback);
  }
  BinarySearchTree.prototype.preOrderTraverseNode = function(node,callback) {
    if(node) {
      callback(node.val);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  // inOrderTraverse(): 中序遍历
  BinarySearchTree.prototype.inOrderTraverse = function(callback) {
    console.log("中序遍历：");
    this.inOrderTraverseNode(this.root, callback);
  }
  BinarySearchTree.prototype.inOrderTraverseNode = function(node, callback) {
    if(node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.val);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  // postOrderTraverse(): 后序遍历
  BinarySearchTree.prototype.postOrderTraverse = function(callback) {
    console.log("后序遍历：");
    this.postOrderTraverseNode(this.root, callback);
  }
  BinarySearchTree.prototype.postOrderTraverseNode = function(node, callback) {
    if(node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback);
      callback(node.val);
    }
  }