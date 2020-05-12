'use strict';
console.log('working');

alert('You will have five questions for you to answer with yes or no. The questions are fun facts and basic information about me.');

var quesSoccre = 'Do you think that I love watching Soccer?';
questionsMaker(quesSoccre, 'no');

var quesCoffe = 'Do you think that I love Coffee?';
questionsMaker(quesCoffe, 'yes');

var quesSmoking = 'Do you think that I\'m a smoker?';
questionsMaker(quesSmoking, 'no');

var quesFood = 'Do you think that I love Shawarma?';
questionsMaker(quesFood,'yes');

var quesAnime= 'Do you think that I love Anime?';
questionsMaker(quesAnime,'yes');

var userName= prompt( 'What is your name?');

alert(` Welcome ${userName}, we're happy to have you here.`);


function questionsMaker(quesText,correctAnswer){
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
  }
  else {
    alert('Uncorrect answer');
  }
}
