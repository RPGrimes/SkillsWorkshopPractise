const leapYear = (year) => {
  if(year % 400 === 0){
    return true
  } else {
    return false
  }
};

module.exports = leapYear;