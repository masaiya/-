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
tree.insert(10);
tree.insert(7);
tree.insert(5);
tree.insert(15);
tree.insert(9);
tree.insert(11);
tree.insert(14);
tree.insert(17);
tree.insert(6);
tree.insert(12);
/**
 *          10
 *      7        15
 *   5    9   11    17
 *     6
 */
/**
 * K <= 根节点  findLessKBiggestNode(根节点.left)
 * K > 根节点  1.findLessKBiggestNode(根节点.right)
 *             2.记忆根节点
 *             3.比较根节点和上面所找到的最大值
 */
function findLessKBiggestNode(root, k) {
  var mem = root.val;
  if(root.val >= k) {
    if(root.left) {
      return findLessKBiggestNode(root.left, k);
    }
    return -1;
  } else if(root.val < k){
    if(root.right) {
      var res = findLessKBiggestNode(root.right, k);
      return Math.max(mem, res);
    }
    return root.val;
  }
}

var res = findLessKBiggestNode(tree.root, 16);
console.log(res);
