import easyWords from './easy';
import hardWords from './hard';
import mediumWords from './medium';
import { CategoryType, AppState } from './types';

export const CATEGORIES: CategoryType[] = [
  { difficulty: 'easy', words: easyWords },
  { difficulty: 'medium', words: mediumWords },
  { difficulty: 'hard', words: hardWords },
];

export const defaultContext: AppState = {
  gameIsStarted: false,
  category: CATEGORIES[0],
  setCategory: () => {},
  wordsLeft: 25,
  startGame: () => {},
  endGame: () => {},
  decrementWordsLeft: () => {},
  resetWordsLeft: () => {},
};
