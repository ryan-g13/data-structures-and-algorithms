'use strict';

const LinkedList = require('../ll_insertions');
// const Node = require('../node');

describe('This is a testing suite for the ll_insertions.js file to verify if inputs work', () => {
  test('#constructor-works', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('#append-works', () => {
    const testList = new LinkedList();
    testList.append(13);
    expect(testList.head.value).toEqual(13);

    testList.append(17);
    expect(testList.head.value).toEqual(13);
    expect(testList.head.next.value).toEqual(17);

    testList.append(11);
    expect(testList.head.value).toEqual(13);
    expect(testList.head.next.value).toEqual(17);
    expect(testList.head.next.next.value).toEqual(11);
  });
  test('#insertBefore-works', () => {
    const testList = new LinkedList();
    testList.append(11);
    testList.append(13);
    testList.append(17);
    testList.append(19);

    expect(testList.insertBefore(13, 7)).toEqual(testList);
    expect(testList.insertBefore(19, 9)).toEqual(testList);
    expect(testList.insertBefore(17, 23)).toEqual(testList);
  });
  test('#insertAfter-works', () => {
    const testList = new LinkedList();
    testList.append(23);
    testList.append(29);
    testList.append(31);
    testList.append(37);

    expect(testList.insertAfter(23, 7)).toEqual(testList);
    expect(testList.insertAfter(29, 9)).toEqual(testList);
    expect(testList.insertAfter(31, 23)).toEqual(testList);
  });
});
