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
    thumbnail: 'https://images.crazygames.com/games/bloxd-io/cover-1686924066155.png',
    url: 'https://bloxd.io'
  },
  {
    id: 'draw-climber',
    title: 'Draw Climber',
    category: 'puzzle',
    thumbnail: 'https://images.crazygames.com/draw-climber/20201124115931/draw-climber-cover?auto=format,compress&q=75&cs=strip',
    url: 'https://www.crazygames.com/embed/draw-climber'
  },
  {
    id: 'count-master',
    title: 'Count Masters',
    category: 'action',
    thumbnail: 'https://images.crazygames.com/count-masters/20220503163001/count-masters-cover?auto=format,compress&q=75&cs=strip',
    url: 'https://www.crazygames.com/embed/count-masters'
  },
  {
    id: '8-ball-billiards',
    title: '8 Ball Billiards',
    category: 'sports',
    thumbnail: 'https://images.crazygames.com/8-ball-billiards-classic/20201124115928/8-ball-billiards-classic-cover?auto=format,compress&q=75&cs=strip',
    url: 'https://www.crazygames.com/embed/8-ball-billiards-classic'
  }
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
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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