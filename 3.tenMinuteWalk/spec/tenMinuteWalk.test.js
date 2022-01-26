const { timeStamp } = require('console');
const tenMinuteWalk = require('../src/tenMinuteWalk');

const arrayTrue = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'];
const arrayFalse = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'n'];

test('function returns true', () => {
  expect(tenMinuteWalk(arrayTrue)).toBe(true)
});

test('function returns false', () => {
  expect(tenMinuteWalk(arrayFalse)).toBe(false)
});