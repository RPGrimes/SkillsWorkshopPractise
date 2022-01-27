const changeConverter = require('../src/changeConverter')

test('returns the value input in an array', () => {
  expect(changeConverter(6.32)).toEqual([6.32])
});