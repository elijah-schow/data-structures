var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  if(value > this.value){
    if(this.right){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if(value < this.value){
    if(this.left){
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  if(value === this.value) {
    result = true;
  } else if(value > this.value && this.right){
    result = this.right.contains(value);
  } else if(value < this.value && this.left){
    result = this.left.contains(value);
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
