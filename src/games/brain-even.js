import { gameEngine, numberRoundsGame } from '../index.js';

function generatingRandomNumber(minNumber, maxNumber) {
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(randomNumber);
}

function generatingGameData() {
  const arrayQuestionsAndAnswers = [];
  for (let i = 0; i < numberRoundsGame; i += 1) {
    const number = generatingRandomNumber(1, 100);
    if (number % 2) {
      arrayQuestionsAndAnswers.push([number, 'no']);
    } else {
      arrayQuestionsAndAnswers.push([number, 'yes']);
    }
  }
  return arrayQuestionsAndAnswers;
}

export default function startGeneratingGameData() {
  gameEngine('Answer "yes" if the number is even, otherwise answer "no".', generatingGameData());
}
