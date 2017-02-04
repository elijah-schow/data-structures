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

DoublyLinkedList.prototype.removeFromTail = function() {

};

DoublyLinkedList.prototype.addToHead = function(value) {

};

DoublyLinkedList.prototype.removeFromHead = function() {

};

DoublyLinkedList.prototype.contains = function(value) {

};

var Node = function(value) {
  var node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};
