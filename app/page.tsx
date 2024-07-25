'use client';

import { useAppContext } from '@/context/AppContext';
import NavBar from '@/components/NavBar';
import PlayGame from '@/components/PlayGame';
import StartGame from '@/components/StartGame';

export default function Home() {
  const { gameIsStarted } = useAppContext();

  return (
    <main className="flex min-h-screen min-w-100 flex-col">
      <NavBar />
      {gameIsStarted ? <PlayGame /> : <StartGame />}
    </main>
  );
}
