function BinarySearchTree() {
  // 属性
  this.root = null;
  this.length = 0;
  // Node节点类
  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  // insert(val):像树中插入一个新的val
  BinarySearchTree.prototype.insert = function(val) {
    // 创建新节点
    var newNode = new Node(val);
    // 判断根节点是否为空
    if(this.root == null) {
      this.root = newNode;
      this.length ++;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if(newNode.val < node.val) {
      // 向左查找
      if(node.left == null) {
        node.left = newNode;
        this.length ++;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 向右查找
      if(node.right == null) {
        node.right = newNode;
        this.length ++;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
var tree = new BinarySearchTree();
tree.insert(8);
tree.insert(6); 
tree.insert(10);
tree.insert(5);
tree.insert(7);
tree.insert(9);
tree.insert(11);
console.log(tree);

var Mirror = function(tree) {
  if(tree.root) {
    const temp = tree.root.right;
    tree.root.right = tree.root.left;
    tree.root.left = temp;
    Mirror(tree.root.left);
    Mirror(tree.root.right);
  }
  return tree;
}

var res = Mirror(tree);
console.log(res);