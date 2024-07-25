'use client';
import { CATEGORIES, defaultContext } from '@/utils/constants';
import { AppState } from '@/utils/types';
import { createContext, ReactNode, useContext, useState } from 'react';

export const AppContext = createContext<AppState>(defaultContext);

type Props = {
  children: ReactNode;
};

export function AppContextProvider({ children }: Props) {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [wordsLeft, setWordsLeft] = useState(25);

  const startGame = () => setGameIsStarted(true);
  const endGame = () => setGameIsStarted(false);

  const decrementWordsLeft = () => setWordsLeft((prev) => prev - 1);
  const resetWordsLeft = () => setWordsLeft(25);

  const value = { category, setCategory, gameIsStarted, startGame, endGame, wordsLeft, decrementWordsLeft, resetWordsLeft };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
