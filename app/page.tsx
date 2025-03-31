'use client';

import React from 'react';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import { useGameStore } from './stores/gameStore';

export default function Home() {
  const { currentGame } = useGameStore();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* 左侧菜单栏 */}
      <Sidebar />
      
      {/* 右侧内容区 */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          {currentGame ? (
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">{currentGame.title}</h2>
              <div className="w-full aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src={currentGame.url}
                  className="w-full h-full"
                  allow="fullscreen; autoplay; clipboard-write"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          ) : null}
          <GameGrid />
        </main>
      </div>
    </div>
  );
} 