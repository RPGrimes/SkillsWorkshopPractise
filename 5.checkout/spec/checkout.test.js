const checkout = require('../src/checkout');

test('checkout tallies the total cost of what is in the basket', () => {
  expect(checkout("ABC")).toBe(100)
})