const changeConverter = (value) => {
  let arr = [];
  let money = value;

while(money >= 0.01){
  let change = findHighestChange(money);
  let index = findHighestChangeIndex(money);
  money -= change
  note = findChangeAmount(index);
  arr.push(findChangeAmount(index));
  };
  return arr;
};

const findHighestChangeIndex = (amount) => {
  values = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  let array = [];
  values.map(value => {  
      if(value > amount){
        array.push('false');
        
      } else {
        array.push('true');
      }
    }
  )
  let index = array.indexOf('true');
  return index
};

const findHighestChange = (amount) => {
  values = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  let array = [];
  values.map(value => {  
      if(value > amount){
        array.push('false');
        
      } else {
        array.push('true');
      }
    }
  )
  let index = array.indexOf('true');
  return values[index]
};

const findChangeAmount = (index) => {
  currency = ['£50', '£20', '£10', '£5', '£2', '£1', '50p', '20p', '10p', '5p', '2p', '1p'];
  let change = currency[index];
  return change;
};

module.exports = changeConverter;