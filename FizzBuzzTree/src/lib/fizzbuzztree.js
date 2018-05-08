'use strict';

import BinaryTree from './binarytree';
import Node from './node';
import { inOrderTraversal } from './traversal';

function fizzBuzzTree(binaryTree) {
  inOrderTraversal(binaryTree.root);
  return binaryTree;
}

export default fizzBuzzTree;
