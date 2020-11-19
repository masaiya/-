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
}
var list1 = new LinkedList();
var list2 = new LinkedList();

list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);

list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);

function merge(root1, root2) {
  if(!root1 && !root2) {
    return null;
  } else if(!root1) {
    return root2;
  } else if(!root2) {
    return root1;
  }
  let head;
  if(root1.val > root2.val) {
    head = root2;
    head.next = merge(root1, root2.next);
  } else {
    head = root1;
    head.next = merge(root1.next, root2);
  }
  return head;
}

var head = merge(list1.head, list2.head);
console.log(head);

function toString(head) {
  var res = '';
  while(head) {
    res += head.val + '  ';
    head = head.next;
  }
  return res;
}

console.log(toString(head));