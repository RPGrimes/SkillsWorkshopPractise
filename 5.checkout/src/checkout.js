const checkout = (basket) => {

  let total = 0;

  for(i = 0; i < basket.length; i++){
    total += items[basket[i]]
  }
    let discount = 0
    let aCount = 0, bCount = 0
    const itemList = basket.split("")
    itemList.map(item => {
      if(item === 'A'){
        aCount++
    } else if (item === 'B'){
        bCount ++
      }
    })
    if(aCount % 3 === 0 && aCount > 0){
      discount += (20*(aCount/3))
    }

    if(bCount % 2 === 0 && bCount > 0){
      discount += (15*(bCount/2))
    }

  return total-discount
};

const items = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

module.exports = checkout;