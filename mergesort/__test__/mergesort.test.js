import mergeSort from '../mergesort';

describe('Testing scheme for mergesort recursive function', () => {
  const testIntArray = [33, 55, 1, 7, 11, 34, 1];
  const testNegArray = [-45, -99, -133, -5, -13];
  const testDecArray = [0.5, -5.5, -6.3, 9.4, 4.4];
  test('Integer Values in Array', () => {
    expect(mergeSort(testIntArray)).toEqual([1, 1, 7, 11, 33, 34, 55]);
  });
  test('negative numbers', () => {
    expect(mergeSort(testNegArray)).toEqual([-133, -99, -45, -13, 5]);
  });
  test('decimal input values in array', () => {
    expect(mergeSort(testDecArray)).toEqual([-6.3, -5.5, 0.5, 4.4, 9.4]);
  });
});
