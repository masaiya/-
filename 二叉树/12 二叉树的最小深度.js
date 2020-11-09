/**
 * 给定一个二叉树，找出其最小深度。
   最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
   说明: 叶子节点是指没有子节点的节点。
 */
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
function minDeep(root) {
  if(!root) {
    return 0;
  }else if(!root.left) {
    return 1 + minDeep(root.right);
  }else if(!root.right) {
    return 1 + minDeep(root.left);
  } else {
    return Math.min(minDeep(root.left), minDeep(root.right)) + 1;
  }
}

var res = minDeep(tree.root);
console.log(res); 




 