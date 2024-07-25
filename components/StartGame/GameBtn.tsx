'use client';

import { useAppContext } from '@/context/AppContext';

export default function GameBtn() {
  const { endGame, gameIsStarted, startGame } = useAppContext();

  const handleClick = () => {
    if (gameIsStarted) {
      endGame();
    } else {
      startGame();
    }
  };

  return (
    <button type="button" className="btn start-btn" onClick={handleClick}>
      {gameIsStarted ? 'end' : 'start'} game
    </button>
  );
}
