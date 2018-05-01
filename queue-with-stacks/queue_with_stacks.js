'use strict';

module.exports = class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(arg) {
    this.stackA.push(arg);
    return this.stackA;
  }

  dequeue() {
    if (this.stackA.length === 0 && this.stack.length === 0) {
      return new Error('Both arrays are empty');
    }
    if (this.stackA.length === 1) {
      return this.stackA.pop();
    }
    const arrLenA = this.stackA.length;
    for (let i = 0; i < arrLenA; i++) {
      const temp = this.stackA.pop();
      this.stackB.push(temp);
    }
    const popped = this.stackB.pop();
    const arrLenB = this.stackB.length;
    for (let i = 0; i < arrLenB; i++) {
      this.stackA.push(this.stackB.pop());
    }
    return popped;
  }
};
