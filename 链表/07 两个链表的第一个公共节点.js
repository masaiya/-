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

function merge(list1, list2) {
  var node;
  if(!list1 || !list2) {
    return null;
  }
  var head1 = list1.head;
  var head2 = list2.head;
  while(head1 && head2) {
    if(head1.val === head2.val) {
      return head1;
    }
    
  }
}

var node = merge(list1, list2);
console.log(node);

function toString(head) {
  var res = '';
  while(head) {
    res += head.val + '  ';
    head = head.next;
  }
  return res;
}

console.log(toString(head));