const middleLetter = (word) => {
  wordLength = word.length
  num = Math.floor(wordLength/2)
  if(wordLength % 2 !== 0){
    arr = word.split('')
    for(i = 0; i <= num; i++) {
      arr.shift();
      arr.pop();
      i++;
    }
    return arr.join()
  } else {

  }
};

console.log(middleLetter('three'))

module.exports = middleLetter;