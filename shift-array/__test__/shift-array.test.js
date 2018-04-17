'use strict';

const shiftArray = require('../shift-array.js');

describe('Test cases to verify shift Array method works', () => {
  test('Even number of indicies in array', () => {
    const testArr1 = [1, 3, 5, 7, 9, 11, 13, 15];
    const testValue1 = 8;
    /* eslint-disable-line */ expect(shiftArray.insertShiftArray(testArr1, testValue1)).toEqual([1, 3, 5, 7, 8, 9, 11, 13, 15]);
  });
  test('Odd number of indicies in array', () => {
    const testArr2 = [1, 3, 5];
    const testValue2 = 4; 
    expect(shiftArray.insertShiftArray(testArr2, testValue2)).toEqual([1, 3, 4, 5]);
  });
  test('All the same number in array', () => {
    const testArr3 = [0, 0, 0, 0, 0];
    const testValue3 = 1;
    expect(shiftArray.insertShiftArray(testArr3, testValue3)).toEqual([0, 0, 0, 1, 0, 0]);
  });
});
