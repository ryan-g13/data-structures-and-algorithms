'use strict';

const LinkedList = require('../ll_merge');
const list = require('../ll_function');

describe('These are testcases to check if the alternating merge (zipper) works', () => {
  describe('This is a test suite with valid use cases', () => {
    test('equal length linked lists', () => {
      const testlist1 = new LinkedList();
      testlist1.append(1);
      testlist1.append(2);
      testlist1.append(3);

      const testlist2 = new LinkedList(); 
      testlist2.append(5);
      testlist2.append(6);
      testlist2.append(7);

      const testlist3 = new LinkedList();
      testlist3.append(1);
      testlist3.append(5);
      testlist3.append(2);
      testlist3.append(6);
      testlist3.append(3);
      testlist3.append(7);

      expect(list.mergeList(testlist1, testlist2)).toEqual(testlist3);
    });
  });
  describe('This is a test to make sure the merge function with bad data kicks out', () => {
    test('bad linked list', () => {
      const testlist1 = new LinkedList();
      testlist1.append(1);
      testlist1.append(2);
      testlist1.append(3);

      const testlist2 = new LinkedList(); 
      expect(list.mergeList(testlist1, testlist2)).toEqual(Error('One or more linked lists DNE'));
    });
  });
});
