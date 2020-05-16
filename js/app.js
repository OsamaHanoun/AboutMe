'use strict';

var userName = prompt('What is your name?');
alert(` Welcome ${userName}, we're happy to have you here`);

var userScore = 0;

alert('Now you will have seven questions for you to answer The questions are fun facts and basic information about me. At the end you will have a score out of seven');
alert('Please answer the following question by typing yes or no');

//call the function

q1();
q2();
q3();
q4();
q5();
q6();
q7();
//osama
// Questions from 1 to 5
function q1(){
  var quest1 = 'Q1: Do you think that I love watching Soccer?';
  yesNoQuestionsMaker(quest1, 'no');
}
function q2(){
  var quest2 = 'Q2: Do yo)u think that I love Coffee?';
  yesNoQuestionsMaker(quest2, 'yes');
}
function q3(){
  var quest3 = 'Q3: Do you think that I\'m a smoker?';
  yesNoQuestionsMaker(quest3, 'no');
}
function q4(){
  var quest4 = 'Q4 Do you think that I love Shawarma?';
  yesNoQuestionsMaker(quest4, 'yes');
}
function q5(){
  var quest5 = 'Q5: Do you think that I love Anime?';
  yesNoQuestionsMaker(quest5, 'yes');
}


// Question 6
function q6(){
  alert('You have finished yes or no questions , next you will have a guessing game questions');
  var quest6 = prompt('Q6: You will have 4 attempts to guess my age and the range from 18 to 28. Please use a numaric value for your input.');
  var attempts = 4;

  for (let index = 0; index < 4; index++) {
    while (quest6 < 18 || quest6 > 28) {
      quest6 = prompt('You have enterd a number out side the range and it won\'t be consiedred as an attempt so try again');
    }

    if (quest6 === '23') {
      alert('You\'re correct I\'m 23 years old');
      userScore++;
      break;
    }
    else {
      var textAttempt = ' attempts';
      switch (quest6) {

      case ('28'):
      case ('27'):
      case ('26'):
        attempts--;
        if (attempts === 1) {
          textAttempt = ' attempt';
        }
        if (attempts !== 0) {
          quest6 = prompt('Your guess is too high and you still have ' + attempts + textAttempt);
        }
        else {
          alert('You don\'t have any more attempts so now we will go to the last question');
        }
        break;

      case ('25'):
      case ('24'):
      case ('22'):
      case ('21'):
        attempts--;
        if (attempts === 1) {
          textAttempt = ' attempt';
        }
        if (attempts !== 0) {
          quest6 = prompt('Your guess is close to the right answer and you still have ' + attempts + textAttempt);
        }
        else {
          alert('You don\'t have any more attempts so now we will go to the last question');
        }
        break;

      case ('20'):
      case ('19'):
      case ('18'):
        attempts--;
        if (attempts === 1) {
          textAttempt = ' attempt';
        }
        if (attempts !== 0) {
          quest6 = prompt('Your guess is too low and you still have ' + attempts + textAttempt);
        }
        else {
          alert('You don\'t have any more attempts so now we will go to the last question');
        }
        break;

      }
    }
  }
}
// Question 7
function q7(){
  var quest7 = prompt('Q7: Try to guess a one of my favourite Anime series. You will have 6 attempts').toLowerCase();

  var myAnimeList = ['one piece', 'naruto', 'jojo\'s bizarre adventure', 'death note'];

  for (let i = 5; i >= 0; i--) {
  // eslint-disable-next-line no-constant-condition
    var gotRight;

    for (let i = 0; i < myAnimeList.length; i++) {
      if (quest7 === myAnimeList[i]) {
        var userAnimeResponed = confirm('You are correct. ' + myAnimeList[i] + ' is one of my favourite Anime series and press ok if you want to know all my favourite ones.');
        if (userAnimeResponed === true) {
          alert(myAnimeList);
        }
        gotRight = true;
        userScore++;
        break;
      }
    }

    if (gotRight) {
      break;
    }
    if (i === 1) {
      quest7 = prompt('Your answer is incorrect and you still have ' + i + ' attempt').toLowerCase();
    }
    else if (i === 0) {
      alert('You don\'t have any more attempts');

    }
    else {
      quest7 = prompt('Your answer is incorrect and you still have ' + i + ' attempts').toLowerCase();

    }
  }
}
// User Score

alert('Your score is ' + userScore + ' out of 7. Thank You for playing my game');



// functions

function yesNoQuestionsMaker(quesText, correctAnswer) {
  var userAnswer;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    userAnswer = prompt(quesText).toLowerCase();
    if (userAnswer === 'yes' || userAnswer === 'no') {
      break;
    }
    else {
      alert('Please answer by typing yes or no only');
    }
  }

  if (correctAnswer === userAnswer) {
    alert(' You\'re correct');
    userScore++;
  }
  else {
    alert('incorrect answer');
  }
}
