function LinkedList() {
  this.head = null;
  function Node(val) {
    this.val = val;
    this.next = null;
  }
  this.length = 0;
  // append(val): 向链表尾部添加一个新的节点
  LinkedList.prototype.append = function(val) {
    var newNode = new Node(val);
    if(this.head == null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length ++;
  }
  // insert(position, val): 向链表的指定位置插入一个新的节点
  LinkedList.prototype.insert = function(position, val) {
    if(position < 0 || position > this.length) {
      return false;
    }
    var newNode = new Node(val);
    var current = this.head;
    var previous = this.head;
    if(position == 0) {
       newNode.next = current;
       this.head = newNode;
    } else {
      while(position > 0) {
        previous = current;
        current = current.next;
        position--;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length ++;
  }
  // remove(element): 从链表中移除数据值为element的节点
  // 2 8 9 12 1 4
  LinkedList.prototype.remove = function(element) {
    var current = this.head;
    var previous = this.head;
    if(this.head.val === element) {
      this.length --;
      return this.head = this.head.next;
    } else {
      while(current) {
        if(current.val === element) {
          this.length --;
          return previous.next = current.next;
        }
        previous = current;
        current = current.next;
      }
    }
    return false;
  }
  // removeAt(position): 从链表中移除指定未知的一项
  // 2 4 6 3 1 10
  LinkedList.prototype.removeAt = function(position) {
    if(position < 0 || position >= this.length) {
      return false;
    }
    var current = this.head;
    var previous = this.head;
    var deleteNode = null;
    if(position == 0) {
      this.length --;
      deleteNode = this.head;
      this.head = this.head.next;
      deleteNode.next = null;
    } else {
      while(position) {
        previous = current;
        current = current.next;
        position --;
      }
      this.length --;
      deleteNode = current;
      previous.next = current.next;
      deleteNode.next = null;
    }
    return deleteNode;
  }
  // update(position, element): 修改某个位置的元素
  // 10 8 
  LinkedList.prototype.update = function(position, element) {
    if(position < 0 || position >= this.length) {
      return false;
    }
    var current = this.head;
    while(position) {
      current = current.next;
      position --;
    }
    current.val = element
    return true;
  }
  // get(postion): 获取对应位置的元素
  LinkedList.prototype.get = function(position) {
    if(position < 0 || position >= this.length) {
      return false;
    }
    var current = this.head;
    while(position) {
      current = current.next;
      position --;
    }
    return current.val;
  }
  // indexOf(element): 返回element在列表中的索引值，如果没有返回-1
  LinkedList.prototype.indexOf = function(element) {
    var current = this.head;
    var index = -1;
    while(current) {
      index ++;
      if(current.val == element) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }
  // isEmpty(): 链表是否为空？
  LinkedList.prototype.isEmpty = function() {
    return this.length == 0 ? true: false;
  }
  // size(): 返回链表元素个数
  LinkedList.prototype.size = function() {
    return this.length;
  }
  // toString(): 以string 的方式输出链表元素
  LinkedList.prototype.toString = function() {
    var current = this.head;
    var result = '';
    while(current) {
      result += current.val + ' -> ';
      current = current.next;
    }
    return result + 'null';
  }
}

var list = new LinkedList();
console.log("append: ");
list.append(10);
list.append(12);
list.append(8);
console.log(list);

console.log("insert: ");
list.insert(0,3);
console.log(list);

console.log("remove: ");
list.remove(3);
console.log(list);

console.log("removeAt: ");
console.log(list.removeAt(1));
console.log(list);

console.log("update: ");
console.log(list.update(1, 99));
console.log(list);

console.log("get: ");
console.log(list.get(1));

console.log("indexOf: ");
console.log(list.indexOf(99));
console.log(list.indexOf(10));
console.log(list.indexOf(11));

console.log("isEmpty: ");
console.log(list.isEmpty());

console.log("size: ");
console.log(list.size());

console.log("toString: ");
console.log(list.toString());