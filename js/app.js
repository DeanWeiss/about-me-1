'use strict';

// Sam Brindle helped with getting the loop to work and setting the "loopCheck" variable.

let siteVisitor = prompt('What is your name?');
let loopCheck = false;
let correctCounter = 0;

alert(`Welcome, ${siteVisitor}! Let's play a game! Please answer "Yes" or "No".`);

// Question 1

while(loopCheck !== true){
  let responseOne = prompt('I like cats. "Yes or No"?').toLowerCase();

  if(responseOne === 'yes' || responseOne === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    correctCounter++;
    loopCheck = true;
  } else if(responseOne === 'no' || responseOne === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

// Question 2

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
    correctCounter++;
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

// Question 3

loopCheck = false;

while(loopCheck !== true){
  let responseThree = prompt('I like books. "Yes or No"?').toLowerCase();

  if(responseThree === 'yes' || responseThree === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    correctCounter++;
    loopCheck = true;
  } else if(responseThree === 'no' || responseThree === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

// Question 4

loopCheck = false;

while(loopCheck !== true){
  let responseFour = prompt('I have a car. "Yes or No"?').toLowerCase();

  if(responseFour === 'yes' || responseFour === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
    correctCounter++;
    loopCheck = true;
  } else if(responseFour === 'no' || responseFour === 'n'){
    // console.log('Sorry! You are wrong.');
    alert('Sorry! You are wrong.');
    loopCheck = true;
  } else{
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }
}

// Question 5

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
    correctCounter++;
    loopCheck = true;
  } else {
    alert('Invalid entry. Try "Yes", "Y", "No", or "N".');
  }

}

// Question 6

let correctAnswer = 33;
let attempt1 = 4;
let responseSix;

for(let i = 0; i < attempt1; i++){
  responseSix = parseInt(prompt('Guess a number'));
  if(responseSix === correctAnswer){
    alert('Ding! Ding! Ding! You are a winner!');
    correctCounter++;
    break;
  } else if(responseSix < correctAnswer){
    alert('Too low! Guess Again');
  } else if(responseSix > correctAnswer){
    alert('Too high! Guess again!');
  } else {
    alert('Invalid input!');

  }
}

if(responseSix !== correctAnswer){
  alert(`Better luck next time! The answer was ${correctAnswer}`);
}

// Question 7

let correctOptions = ['halo 2', 'starcraft', 'elden ring'];
let attempt2 = 6;
let responseSeven;
let loopCheck2 = false;

for(let i = 0; i < attempt2; i++){
  responseSeven = prompt('What is one of my top 10 video games of all time?').toLowerCase();

  for(let j = 0; j < correctOptions.length; j++){

    if(correctOptions[j] === responseSeven){
      alert('Ding! Ding! Ding! You are a winner!');
      correctCounter++;
      loopCheck2 = true;
      break;
    }
  }

  if(loopCheck2){
    break;
  } else if(i === attempt2-1){
    alert(`Nice try, but you are out of guesses! My favorite games are ${correctOptions}`);
    break;
  } else{
    alert(`Sorry, ${responseSeven} isn't one of them!`);
  }
}

alert(`Thanks for playing, ${siteVisitor}! You got ${correctCounter} questions correct!`);
