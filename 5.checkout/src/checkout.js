const items = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

const checkout = (basket) => {

  let aCount = 0, bCount = 0

  const itemList = basket.split("")
  itemList.map(item => {
    if(item === 'A'){
      aCount++
  } else if (item === 'B'){
      bCount ++
    }
  })
    
  let total = calculateGrossTotal(basket) - calculateDiscount(aCount, bCount)

  return total
};

const calculateGrossTotal = (basket) => {
  let grossTotal = 0
  for(i = 0; i < basket.length; i++){
    grossTotal += items[basket[i]]
  }
  return grossTotal
}

const calculateDiscount = (aCount, bCount) => {
  let discount = 0

  if(aCount % 3 === 0 && aCount > 0){
    discount += (20*(aCount/3))
  }

  if(bCount % 2 === 0 && bCount > 0){
    discount += (15*(bCount/2))
  }

  return discount
}

module.exports = checkout;