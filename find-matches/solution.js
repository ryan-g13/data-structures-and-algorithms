'use strict';

import Queue from 'queue-fifo';
import Node from 'node';

const findMatches = (tree, value) => {
  let q1 = new Queue();
  let q2 = new Queue();
  const currentNode = tree.root;
  q1.enqueue(currentNode);
  while(!q1.isEmpty()) {
    let temp = q1.dequeue();
    if (temp.value === value) {
      q2.enqueue(temp);
    }
    for (let i = 0; i < temp.children.length; i++) {
      q1.enqueue(temp.children[i]);
    }
  }
  return q2;
}