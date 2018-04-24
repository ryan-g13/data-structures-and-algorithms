'use strict';

const Node = require('./node');

// Assumption from whiteboarding test that this exists/ we have access to this.
const LinkedList = module.exports = class {
  constructor() {
    this.head = null;
  }

  // Step 1 of the whiteboarding.
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // Step 2 to the whiteboarding question.
  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('__ERROR__ List is empty');
    }   
    
    if (this.head.value === value) {
      const temp = this.head;
      this.head = new Node(newValue);
      this.head.next = temp;
      return this;
    }
    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        const temp = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = temp;
        break;
      }
    }
    if (currentNode.value !== value) return new Error('Node Value Not in linked List');
    return this;
  }

  // Step 3 to the whiteboarding question.
  insertAfter(value, newValue) {
    if (!this.head) {
      throw new Error('__ERROR__ List is empty');
    }

    if (this.head.value === value) {
      const temp = this.head.next;
      this.head.next = new Node(newValue);
      this.head.next.next = temp;
      return this;
    }
    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        const temp = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = temp;
        break; 
      }
    }
    if (currentNode.value !== value) return new Error('Node Value Not in linked List');
    return this;
  }
};

// Debugging code
// const test = new LinkedList();
// test.append(13);
// test.append(15);
// test.append(17);
// test.append(19);

