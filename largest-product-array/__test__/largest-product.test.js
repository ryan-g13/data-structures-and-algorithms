'use strict';

const largestProduct = require('../largest-product.js');

describe('Test cases to verify if the 2-D array being passed as a parameter returns the max as expected', () => {
  test('to verify if following array returns correct value.', () => {
    const testArr = [[3, 5, 7], [11, 13, 17], [19, 23, 29]];
    expect(largestProduct.largestProduct(testArr)).toEqual(667);
  });
  test('Test case to verify if value is not included', () => {
    const testArr1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    expect(largestProduct.largestProduct(testArr1)).toEqual(0);
  });
  test('Test to verify if value is included if returns correct value', () => {
    const testArr2 = [[1, 2], [3, 4], [5, 6]];
    expect(largestProduct.largestProduct(testArr2)).toEqual(30);
  });
});
