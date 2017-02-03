var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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
}





/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  addChild: O(1)
 *  contains: O(n)
 *
 */
