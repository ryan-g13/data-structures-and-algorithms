'use strict';

const Queue = require('../queue_with_stacks');

const queue = new Queue();

describe('This is a test suite to verify WBing functions are working', () => {
  test('This is a test for empty stacks', () => { // --trying to test for error object.
    expect(() => queue.dequeue()).toThrowError(Error);
  });
  test('This is a test to verify the enqueue method works', () => {
    expect(queue.enqueue(3)).toEqual([3]);
  });
  test('This is a test to verify the dequeue method works', () => {
    expect(queue.dequeue()).toEqual(3);
  });
  test('This is a test to dequeue a filled list', () => {
    const queue1 = new Queue();
    queue1.enqueue(5);
    queue1.enqueue(12);
    queue1.enqueue(13);
    expect(queue1.dequeue()).toEqual(5);
  });
});
