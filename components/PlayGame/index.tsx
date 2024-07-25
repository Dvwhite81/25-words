'use client';

import { useAppContext } from '@/context/AppContext';
import GameBtn from '../StartGame/GameBtn';

export default function PlayGame() {
  const { category } = useAppContext();

  return (
    <div>
      <h1>Play game</h1>
      <p>difficulty: {category.difficulty}</p>
      <GameBtn />
    </div>
  );
}
