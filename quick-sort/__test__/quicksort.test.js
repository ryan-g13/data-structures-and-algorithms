import quickSort from '../quicksort';

describe('', () => {
  const testArray = [10, 45, 6, 1, 134, 13];
  const testArray2 = [1.2, -1, -5, -10, 5.5, 6.6, 7.9, 13]
  test('Testing for a valid input', () => {
    expect(quickSort(testArray, 0, 5)).toEqual([1, 6, 10, 13, 45, 134]);
  });
  test('Invalid parameters', () => {
    expect(quickSort(0, 0, 0)).toEqual(0);
  });
  test('Testing for valid decimal input', () => {
    expect(quickSort(testArray2, 0, 7)).toEqual([-10, -5, -1, 1.2, 5.5, 6.6, 7.9, 13]);
  });
});

