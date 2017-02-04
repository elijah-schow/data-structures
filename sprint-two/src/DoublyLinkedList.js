var DoublyLinkedList = function() {
  var list = {};
  this.head = null;
  this.tail = null;


};

DoublyLinkedList.prototype.addToTail = function(value) {
  var node = Node(value);
  var oldTail = this.tail;
  if (this.tail === null) {
    this.tail = node;
  } else {
    oldTail.next = node;
    node.previous = oldTail;
    this.tail = node;
  }
  if (this.head === null) {
    this.head = node;
  }
};

DoublyLinkedList.prototype.removeTail = function() {

};

DoublyLinkedList.prototype.addToHead = function(value) {

};

DoublyLinkedList.prototype.removeHead = function() {
  var oldHead = this.head.value;
  this.head = this.head.next;
  return oldHead;
};

DoublyLinkedList.prototype.contains = function(value) {
  var result = false;
  var node = this.head;
  do {
    if (node.value === value) {
      result = true;
    }
    node = node.next;
  } while (node && !result);

  return result;
};

var Node = function(value) {
  var node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};
