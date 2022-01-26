const middleLetter = require('../src/middleLetter');

test('input is a string', () => {
  expect(middleLetter(3)).toBe(false)
  expect(middleLetter([3])).toEqual(false)
  expect(middleLetter("three")).toBe(true)
});