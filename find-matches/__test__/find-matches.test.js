'use strict';

import findMatches from '../solution';

describe('Testing block for FindMatches functionality of the K-ary tree', () => {
  test('Empty Tree test', () => {
    const testTree = new Tree();
    expect(findMatches(testTree, 2)).toBeFalsy();
  });
  test('All the same values', () => {

  });
  test('expected failure', () => {

  });
});
