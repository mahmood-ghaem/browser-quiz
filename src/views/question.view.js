'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */
import { quizData } from '../data.js';

export const questionView = (question = {}) => {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quizContainer', 'showQuiz');

  const quizHeader = document.createElement('h3');
  quizHeader.innerText = question.title;
  quizContainer.appendChild(quizHeader);

  const questionText = document.createElement('div');
  questionText.classList.add('question', 'm-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);

  const answerButtons = document.createElement('div');
  answerButtons.classList.add('answerButtons', 'd-grid', 'gap-2', 'mx-5');

  for (const key in question.answers) {
    const answerButton = document.createElement('button');
    answerButton.classList.add('btn', 'btn-primary', 'btn-lg', 'w-100');
    answerButton.setAttribute('data-key', key);
    answerButton.setAttribute('data-correct', question.correct);
    answerButton.innerText = question.answers[key];
    answerButtons.appendChild(answerButton);
  }
  quizContainer.appendChild(answerButtons);
  return quizContainer;
};

export const scoreView = () => {
  console.log('hi');
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quizContainer', 'showQuiz');

  const quizHeader = document.createElement('h3');
  quizHeader.innerText = 'Summary';
  quizContainer.appendChild(quizHeader);

  const summaryText = document.createElement('div');
  summaryText.classList.add('question', 'm-5');
  summaryText.innerText =
    'Your score is ' +
    quizData.quiz.correct +
    '\n You answered ' +
    quizData.quiz.answered +
    ' questions';
  quizContainer.appendChild(summaryText);

  const successPercentage = Math.floor((quizData.quiz.answered * 60)/100);
  console.log(successPercentage)
  if(quizData.quiz.correct >= successPercentage){
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('fas', 'fa-check', 'checkIcon');
  quizContainer.appendChild(checkIcon);
  } else {
  const failedIcon = document.createElement('i');
  failedIcon.classList.add('fas', 'fa-times', 'failedIcon');
  quizContainer.appendChild(failedIcon);
  }

  document.body.appendChild(quizContainer);
};
