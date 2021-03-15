'use strict';

/**
 * @startQuiz button
 * starts the quiz by displaying the first question
 */

import { startQuiz } from '../handlers/quiz.handler.js';

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startQuiz);
