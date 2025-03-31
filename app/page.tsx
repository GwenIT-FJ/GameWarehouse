'use client';

import React from 'react';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import GamePlayer from './components/GamePlayer';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* 左侧菜单栏 */}
      <Sidebar />
      
      {/* 右侧内容区 */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <GameGrid />
        </main>
      </div>

      {/* 游戏播放弹窗（默认隐藏） */}
      <GamePlayer />
    </div>
  );
} 