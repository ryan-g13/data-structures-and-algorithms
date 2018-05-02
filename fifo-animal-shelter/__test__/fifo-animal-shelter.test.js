'use strict';

import AnimalQueue from './fifo-animal-shelter.test'; 
// import Animal from '../animal';

describe('This is a test suite for testing the animal shelter logic', () => {
  test('test when no pref passed.', () => {
    const testQueue = new AnimalQueue();
    expect(testQueue).toEqual(undefined);
  });
  test('If enqueue works', () => {
    AnimalQueue.enqueue('cat');
    expect(AnimalQueue.enqueue('cat').length).toHaveLength(2);
  });

  test('dequeue testing no pref returns first animal obj', () => {
    expect(AnimalQueue.dequeue().type).toEqual('cat');
  });
  test('dequeue testing pref returns first Cat obj', () => {
    expect(AnimalQueue.dequeue('cat').type).toEqual('cat');
  });
});
