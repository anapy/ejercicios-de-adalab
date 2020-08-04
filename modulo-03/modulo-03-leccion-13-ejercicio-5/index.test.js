const fizzbuzz = require('./index');

describe('Sum App', () => {
  test('returns fizz if the number is multiply of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  test('returns fizz if the number is multiply of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  test('returns fizz if the number is multiply of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  })

  test('returns the same number if the number is nor multiply of 3 or 5', () => {
    expect(fizzbuzz(4)).toBe(4);
  })
})
