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
list.append(10);
list.append(12);
list.append(8);

function findKthToTail(head, k) {
  if(!head || !k) return null;
  var front = head;
  var behind = head;
  var index = 1;
  while(front.next) {
    index ++;
    front = front.next;
    if(index > k) {
      behind = behind.next;
    }
  }
  return (k<=index) && behind;
}

var res = findKthToTail(list.head, 2);
console.log(res);

console.log(list);