var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.contains = function(target) {
  var result = false;

  if(this.value === target){
    result = true;
  } else if(this.hasChildren()) {
    result = _.reduce(this.children, function(memo, child){
      return child.contains(target) || memo;
    }, false);
  }

  return result;
};

treeMethods.hasChildren = function() {
  return this.children.length > 0;
};

treeMethods.removeFromParent = function() {
  // if this node has a parent
  if(this.parent){
    // remove this node from its parent
    for(var i = 0; i < this.parent.children.length; i++){
      if(this.parent.children[i] === this){
        this.parent.children.splice(i, 1);
        break;
      }
    }
    // remove this node's reference to its parent
    this.parent = null;
  }
};

treeMethods.traverse = function(func){
  // execute the callback function on this node's value
  this.value = func(this.value);
  //if this node has children
  if(this.hasChildren()){
    // invoke traverse() for each child
    for(var i = 0; i < this.children.length; i++){
      this.children[i].traverse(func);
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  addChild: O(1)
 *  contains: O(n)
 *
 */
