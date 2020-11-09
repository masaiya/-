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