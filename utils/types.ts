import { Dispatch, SetStateAction } from 'react';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type CategoryType = {
  difficulty: Difficulty;
  words: string[];
};

/* Context */
export type AppState = {
  gameIsStarted: boolean;
  category: CategoryType;
  setCategory: Dispatch<SetStateAction<CategoryType>>;
  wordsLeft: number;
  startGame: () => void;
  endGame: () => void;
  decrementWordsLeft: () => void;
  resetWordsLeft: () => void;
};
