'use client';

import React from 'react';
import { useGameStore } from '../stores/gameStore';

const GamePlayer = () => {
  const { currentGame, setCurrentGame } = useGameStore();

  if (!currentGame) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 w-full h-full md:w-4/5 md:h-4/5 relative rounded-lg overflow-hidden">
        {/* 关闭按钮 */}
        <button
          onClick={() => setCurrentGame(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 游戏标题 */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{currentGame.title}</h2>
        </div>

        {/* 游戏 iframe */}
        <iframe
          src={currentGame.url}
          className="w-full h-full"
          allow="fullscreen; autoplay; clipboard-write"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default GamePlayer; 