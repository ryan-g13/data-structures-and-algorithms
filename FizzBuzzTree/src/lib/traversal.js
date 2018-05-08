'use strict';

// big O of n is number of nodes (have to visit every node) in time
// big O of H is the height of the tree in space 
const preOrderTraversal = (rootNode) => {
  // Root then left then right
  if (!rootNode) {
    return undefined;
  }
  console.log(`visiting a node with value ${rootNode.value}`);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return undefined;
};

// big O of n is number of nodes (have to visit every node) in time
// big O of H is the height of the tree in space 
const postOrderTraversal = (rootNode) => {
  // Root then left then right
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  console.log(`visiting a node with value ${rootNode.value}`);
  return undefined;
};

// big O of n ( n = # of nodes) for time since you must visit each node 
// big O for space should be H being the height of the tree.
const inOrderTraversal = (rootNode) => {
  // Left, Root , then Right nodes 
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizzBuzz';
  } else if ( rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  }
  inOrderTraversal(rootNode.right);
  return rootNode;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
