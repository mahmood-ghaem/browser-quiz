import { createQuestion } from '../views/question.view.js';
import { quizData } from '../data.js';
import { createFooter } from '../views/footer.view.js';
import { addFooterListener } from '../listeners/footer.listener.js';
import { addSelectingListener } from '../listeners/selecting.listener.js';
import { addMenuBarListener } from '../listeners/menubar.listener.js';

export const startQuiz = () => {
  const startContainer = document.querySelector('.startContainer');
  startContainer.remove();
  updateQuiz(quizData.questions[0], 0);
};

export const updateQuiz = (quiz, currentQuestion) => {
  createQuestion(quiz);
  const quizContainer = document.querySelector('.quizContainer');
  const quizFooter = createFooter(currentQuestion, quizData.questions.length);
  quizContainer.appendChild(quizFooter);

  addFooterListener();
  addSelectingListener();
  addMenuBarListener();
};
