'use strict';

const Node = require('./node');

// Assumption from whiteboarding test that this exists/ we have access to this.
module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // Assumption of access from whiteboarding.
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

  // Assumption of access from whiteboarding question.
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

  // Assumption of access from whiteboarding question.
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
