const tenMinuteWalk = (arr) => {
  let nCount = 0
  let sCount = 0
  let eCount = 0
  let wCount = 0

  arr.map(a => {
    if(a === 'n'){
      nCount++
    } else if (a === 's'){
      sCount++
    } else if (a === 'e'){
      eCount ++
    } else {
      wCount++
    }
  })

  if(nCount === sCount && eCount === wCount){
    return true
  } else {
    return false
  }
};

module.exports = tenMinuteWalk;

