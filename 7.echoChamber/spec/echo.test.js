const echoChamber = require('../src/echo');

test('returns user input', () => {
  expect(echoChamber("Hello")).toBe('Hello')
})