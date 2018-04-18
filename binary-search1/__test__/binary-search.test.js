'use strict';

const binarySearch = require('../binary-search.js');

describe('Test cases to verify if binary search is correctly returning values either index of search or -1 if DNE', () => {
  test('Test to verify if can select the correct index if included', () => {
    const testVal = 13;
    const testArr = [3, 5, 7, 11, 13, 17, 19];
    expect(binarySearch.binarySearch(testArr, testVal)).toEqual(4);
  });
  test('Test case to verify if value is not included', () => {
    const testVal1 = 99;
    const testArr1 = [1, 1, 2, 3, 5, 11];
    expect(binarySearch.binarySearch(testArr1, testVal1)).toEqual(-1);
  });
  test('Test to verify if value is included if returns correct value', () => {
    const testVal2 = 22;
    const testArr2 = [5, 11, 22, 45, 65, 99, 101];
    expect(binarySearch.binarySearch(testArr2, testVal2)).toEqual(2);
  });
});
