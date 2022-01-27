const changeConverter = (value) => {
  let money = value;
  let arr = [];

  while(money > 0){
    if(money / 50 >= 1){
      arr.push('£50')
      money -= 50
    } else if(money / 20 >= 1){
      arr.push('£20')
      money -= 20
    } else if(money / 10 >= 1){
      arr.push('£10')
      money -= 10
    } else if(money / 5 >= 1){
      arr.push('£5')
      money -= 5
    } else if(money / 2 >= 1){
      arr.push('£2')
      money -= 2
    } else if(money / 1 >= 1){
      arr.push('£1')
      money -= 1
    } else if(money / 0.5 >= 1){
      arr.push('50p')
      money -= 0.5
    } else if(money / 0.2 >= 1){
      arr.push('20p')
      money -= 0.2
    } else if(money / 0.1 >= 1){
      arr.push('10p')
      money -= 0.1
    } else if(money / 0.05 >= 1){
      arr.push('5p')
      money -= 0.05
    } else if(money / 0.02 >= 1){
      arr.push('2p')
      money -= 0.02
    } else if(money / 0.01 >= 1){
      arr.push('1p')
      money -= 0.01
    } else {
      break
    }
  }
  return arr
};

module.exports = changeConverter;