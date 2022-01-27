let readlineSync = require('readline-sync');

const echoChamber = () => {
  console.log("Hello and welcome to the Echo Chamber. Please enter an input below. When you are ready to leave the Echo Chamber, please enter 'exit'.")
  let run = true
  while(run == true){
    let command = readlineSync.question('Enter your input > ')
    let farewell = "Goodbye"
    if(command !== 'exit'){
      console.log(command)
    } else {
      console.log(farewell)
      break
    }
  }
};

echoChamber();

module.exports = echoChamber;