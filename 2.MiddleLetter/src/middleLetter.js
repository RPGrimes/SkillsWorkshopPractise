const middleLetter = (word) => {
  wordLength = word.length
  
  if(wordLength % 2 !== 0){
    num = Math.floor(wordLength / 2)
    arr = word.split('')
    for(i = 0; i < num; i++) {
      editArray(arr)
    }
    return arr.join()

  } else {
    num = Math.floor(wordLength / 2) - 1
    arr = word.split('')
    for(i = 0; i < num; i++) {
      editArray(arr)
    }
    return arr.join('')
  }
};

const editArray = (arr) => {
  arr.shift();
  arr.pop();
}

module.exports = middleLetter;
