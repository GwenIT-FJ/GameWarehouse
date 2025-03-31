'use client';

import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 'io', name: 'IO Games', icon: '🎮' },
  { id: 'action', name: '动作游戏', icon: '⚔️' },
  { id: 'puzzle', name: '益智游戏', icon: '🧩' },
  { id: 'sports', name: '体育游戏', icon: '⚽' },
  { id: 'strategy', name: '策略游戏', icon: '🎯' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Game Warehouse</h1>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            主菜单
          </h2>
          <div className="space-y-1 mt-2">
            <Link href="/" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-gray-700">
              🏠 首页
            </Link>
            <Link href="/recent" className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-gray-700">
              🕒 最近游戏
            </Link>
          </div>
        </div>

        {/* 游戏分类 */}
        <div className="px-4 py-2 mt-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            游戏分类
          </h2>
          <div className="space-y-1 mt-2">
            {categories.map(category => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="flex items-center px-2 py-2 text-sm rounded-lg hover:bg-gray-700"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar; 