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

var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log(list);
var reverseList = function(head) {
  var current = head;
  var tagHead = head;
  while(tagHead && tagHead.next) {
    current = tagHead.next;
    tagHead.next = current.next;
    current.next = head;
    head = current;
  }
  return head;
}

var res = reverseList(list.head);
console.log(res);



