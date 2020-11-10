/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
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
tree.insert(8);
tree.insert(22);
tree.insert(1);
tree.insert(2);
tree.insert(99);
/**
 *         3
 *     1      10
 *       2   8   22
 *                   99
 * stack: 3 
 * sum = 6
 */

function findPath(root, number) {
  var res = [];
  if(root) {
    findPathCore(root, number, [], 0, res);
  }
  return res;
}
function findPathCore(node, number, stack, sum, res) {
  stack.push(node.val);
  sum += node.val;
  if(!node.left && !node.right && sum === number) {
    res.push(stack.slice(0));
  }
  if(node.left) {
    findPathCore(node.left, number, stack, sum, res);
  }
  if(node.right) {
    findPathCore(node.right, number, stack, sum, res);
  }
  stack.pop();
}
var res = findPath(tree.root, 134);
console.log(res);