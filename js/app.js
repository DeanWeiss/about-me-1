'use strict';

// Sam Brindle helped with getting the loop to work and setting the "loopCheck" variable.

let siteVisitor = prompt('What is your name?');
let loopCheck = false;

alert(`Welcome, ${siteVisitor}! Let's play a game! Please answer "Yes" or "No".`);

while(loopCheck !== true){
  let responseOne = prompt('I like cats. "Yes or No"?').toLowerCase();

  if(responseOne === 'yes' || responseOne === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    loopCheck = true;
  } else if(responseOne === 'no' || responseOne === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

loopCheck = false;

while(loopCheck !== true){
  let responseTwo = prompt('I have two children. "Yes or No"?').toLowerCase();

  if(responseTwo === 'yes' || responseTwo === 'y'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong!');
    loopCheck = true;
  } else if(responseTwo === 'no' || responseTwo === 'n'){
    // console.log('You are correct!');
    alert('You are correct!');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

loopCheck = false;

while(loopCheck !== true){
  let responseThree = prompt('I like books. "Yes or No"?').toLowerCase();

  if(responseThree === 'yes' || responseThree === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    loopCheck = true;
  } else if(responseThree === 'no' || responseThree === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

loopCheck = false;

while(loopCheck !== true){
  let responseFour = prompt('I have a car. "Yes or No"?').toLowerCase();

  if(responseFour === 'yes' || responseFour === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    loopCheck = true;
  } else if(responseFour === 'no' || responseFour === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else{
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }
}

loopCheck = false;

while(loopCheck !== true){
  let responseFive = prompt('My favorite vegetable is broccoli. "Yes or No"?').toLowerCase();

  if(responseFive === 'yes' || responseFive === 'y'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else if(responseFive === 'no' || responseFive === 'n'){
    // console.log('You are correct!');
    alert('You are correct!');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}
