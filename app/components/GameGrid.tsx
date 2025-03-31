'use client';

import React from 'react';
import Image from 'next/image';
import { useGameStore } from '../stores/gameStore';

// 示例游戏数据
const games = [
  {
    id: 'bloxd-io',
    title: 'Bloxd.io',
    category: 'io',
    thumbnail: '/games/bloxd-io.jpg',
    url: 'https://bloxd.io'
  },
  {
    id: 'draw-climber',
    title: 'Draw Climber',
    category: 'puzzle',
    thumbnail: '/games/draw-climber.jpg',
    url: 'https://www.crazygames.com/game/draw-climber'
  },
  // 可以添加更多游戏
];

const GameGrid = () => {
  const { setCurrentGame } = useGameStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
          onClick={() => setCurrentGame(game)}
        >
          <div className="relative h-48">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{game.title}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {game.category.charAt(0).toUpperCase() + game.category.slice(1)} Games
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid; 