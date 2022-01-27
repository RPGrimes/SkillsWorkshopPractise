const changeConverter = require('../src/changeConverter')

test('returns the value input in an array', () => {
  expect(changeConverter(6.32)).toEqual(['£5', '£1', '20p', '10p', '2p'])
});