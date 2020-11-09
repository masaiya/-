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
tree.insert(3);
tree.insert(10);
tree.insert(22);
tree.insert(1);
tree.insert(2);
tree.insert(99);

function TreeDeep(root) {
  return !root ? 0 : Math.max(TreeDeep(root.left), TreeDeep(root.right)) + 1;
}

var res = TreeDeep(tree.root);
console.log(res);