'use strict';

const list = module.exports = {};

function mergeList(linkedList1, linkedList2) {
  let currentNode = linkedList1.head;
  let temp2 = linkedList2.head;
  if (!currentNode || !temp2) return new Error('One or more linked lists DNE');
  let temp1;
  let head2 = temp2.next;
  while (currentNode) {
    temp1 = currentNode.next;
    currentNode.next = temp2;
    currentNode.next.next = temp1;
    currentNode = currentNode.next.next;
    temp2 = head2;
    head2 = head2.next;
    if (currentNode.next === null || temp2.next === null) return linkedList1.head;
  }
  return linkedList1.head;
}
