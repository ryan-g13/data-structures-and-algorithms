import repeatedWord from '../repeated-word';

describe('Test block to test repeated word function', () => {
  test('check for empty string', () => {
    expect(() => repeatedWord('')).toThrowError('Invalid string please provide new input.');
  });
  test('check for bad data types being passed', () => {
    expect(() => repeatedWord(13)).toThrowError('Invalid datatype please provide new string');
  });
  test('Check for valid input expect certain word back as output', () => {
    const string = 'The quick brown fox jumps over the slower older fox';
    expect(repeatedWord(string)).toEqual('fox');
  });
});
