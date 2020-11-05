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

  // search(val):在树中查找一个val
  BinarySearchTree.prototype.search = function(val) {
   var node = this.root;
   while(node) {
     if(node.val == val) {
       return true;
     } else if(node.val < val) {
       node = node.right;
     } else {
       node = node.left;
     }
   }
   return false; 
  }
  // 遍历 -- 递归遍历
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

  // 遍历 -- 非递归遍历
  // preTraverse(): 先序遍历
  BinarySearchTree.prototype.preTraverse = function() {
    var stack = [];
    var result = [];
    var current = this.root;
    while(current || stack.length > 0) {
      while(current) {
        stack.push(current);
        result.push(current.val);
        current = current.left;
      }
      current = stack.pop();
      current = current.right;
    }
    /**
     *          10
     *     5         15
     *  2     8   12    22
     *    4
     *   3 4
     * stack:       
     * result: 10 5 2 4 3 4 8 15 12 22
     *         10 5 2 4 3 4 8 15 12 22    
     */
    return "前序遍历:  " +result;
  }
  // inTraverse(): 中序遍历
  BinarySearchTree.prototype.inTraverse = function() {
    var stack = [];
    var result = [];
    var current = this.root;
    while(current || stack.length > 0) {
      while(current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
    return "中序遍历:  " +result;
  }
  // postTraverse(): 后序遍历
  BinarySearchTree.prototype.postTraverse = function() {
    var result = [];
    var stack = [];
    var last = null; // 标记上一个访问的节点
    var current = this.root;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack[stack.length - 1];
      if (!current.right || current.right == last) {
        current = stack.pop();
        result.push(current.val);
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;
      }
    }
    return "后序遍历:  " +result;
  }

  // getRoot(): 返回树的根节点
  BinarySearchTree.prototype.getRoot = function() {
    return this.root;
  }
  
  // mix(): 返回树中最小的val
  BinarySearchTree.prototype.mix = function() {
    var node =this.root;
    if(node == null) {
      return null;
    }
    while(node.left) {
      node = node.left;
    }
    return "mix: " + node.val;
  }

  // max(): 返回树中最大的val
  BinarySearchTree.prototype.max = function() {
    return "max: "+ this.maxNode(this.root);
  }
  // maxNode(node): 返回树中最大的val
  BinarySearchTree.prototype.maxNode = function(node) {
    if(node == null) {
      return null;
    }
    while(node.right) {
      node = node.right;
    }
    return node.val;
  }

  // deep(): 返回树的深度
  BinarySearchTree.prototype.deep = function() {
    var deep = this.deepTree(this.root, 0);
    return "deep: " + deep;
  }

  // length(): 返回树中节点个数
  BinarySearchTree.prototype.size = function() {
    return "size: " + this.length;
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

  // remove(val): 删除val节点
  BinarySearchTree.prototype.remove = function(val) {
    // 如果不存在该节点，直接返回false
    if(!this.search(val)) return false;
    this.removeNode(this.root, val);
    this.length --;
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(2);
tree.insert(11);
tree.insert(12);
console.log(tree);

console.log(tree.search(10));
console.log(tree.search(12));
var result = "";
tree.preOrderTraverse(function(val) {
  result += val +"  ";
});
console.log(result);

result = "";
tree.inOrderTraverse(function(val) {
  result += val +"  ";
});
console.log(result);

result = "";
tree.postOrderTraverse(function(val) {
  result += val +"  ";
});
console.log(result);

console.log(tree.mix());
console.log(tree.max());
console.log(tree.deep());
console.log(tree.size());

tree.remove(10);
result = "";
tree.preOrderTraverse(function(val) {
  result += val +"  ";
});
console.log(result);
console.log(tree.size());

tree.insert(0);
tree.insert(1);

// 非递归遍历
console.log("非递归遍历: ");
console.log(tree.preTraverse());
console.log(tree.inTraverse());
console.log(tree.postTraverse());

/**
 *        2
 *    0     11
 *      1     12
 * 1 0 12 11 2
 */