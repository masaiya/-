/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
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

function HasSubtree(root1, root2) {
  let result = false;
  if(root1 && root2) {
    if(root1.val === root2.val) {
      result = compare(root1, root2);
    }
    if(!result) {
      result = HasSubtree(root1.right, root2);
    }
    if(!result) {
      result = HasSubtree(root1.left, root2);
    }
  }
  return result;
}

function compare(root1, root2) {
  if(root2 == null) {
    return true;
  }
  if(root1 == null) {
    return false;
  }
  if(root1.val !== root2.val) {
    return false;
  }
  return compare(root1.right, root2.right) && compare(root1.left, root2.left);
}
var tree1 = new BinarySearchTree();
tree1.insert(3);
tree1.insert(10);
tree1.insert(8);
tree1.insert(22);
tree1.insert(1);
tree1.insert(2);
tree1.insert(99);
/**
 *         3
 *     1      10
 *       2   8   22
 *                  99
 */

var tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(8);
tree2.insert(12);

var res = HasSubtree(tree1.root, tree2.root);
console.log(res);