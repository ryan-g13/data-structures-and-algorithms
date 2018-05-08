'use strict';

import Queue from 'queue-fifo';
// import BinaryTree from './binarytree';
// import Node from './node';

const breadthFirstTraversal = (rootNode) => {
  let breadthList = '';
  if (!rootNode) {
    return undefined;
  }
  const queue = new Queue();
  queue.enqueue(rootNode);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
    breadthList += `${node.value},`;
  }
  breadthList = breadthList.slice(0, -1);
  return breadthList;
};

export default breadthFirstTraversal;
