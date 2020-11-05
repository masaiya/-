function BinarySearchTree() {
  // 属性
  this.root = null;
  // Node节点类
  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  // insertNode(val):像树中插入一个新的val
  BinarySearchTree.prototype.insertNode = function(val) {
    // 创建新节点
    var newNode = new Node(val);
    // 判断根节点是否为空
    if(this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    
  }
}