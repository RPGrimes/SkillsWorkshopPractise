const checkout = (basket) => {

  let total = 0;

  for(i = 0; i < basket.length; i++){
    total += items[basket[i]]
  }
  return total
};

const items = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

module.exports = checkout;