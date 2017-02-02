var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.tail === null) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    if (this.head === null) {
      this.head = node;
    }
  };


  list.removeHead = function() {
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    var result = false;
    var node = this.head;

    do {
      if (node.value === target) {
        result = true;
      }
      node = node['next'];
    } while (node && !result);

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    removeHead: O(1)
    addTail: O(1)
    contains: O(n)
 */
