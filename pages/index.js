import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Head from 'next/head'

export default function Home() {
  // 添加状态管理
  const [currentGame, setCurrentGame] = useState(null)
  const [recentGames, setRecentGames] = useState([])

  // 处理游戏滑动
  const slideGames = (sliderId, direction) => {
    const slider = document.getElementById(sliderId)
    const scrollAmount = direction === 'left' ? -300 : 300
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  // 处理游戏点击
  const handleGameClick = (e, gameData) => {
    e.preventDefault()
    setCurrentGame(gameData)
    addToRecentlyPlayed(gameData)
  }

  // 添加到最近游玩
  const addToRecentlyPlayed = (gameData) => {
    const updatedGames = JSON.parse(localStorage.getItem('recentGames') || '[]')
    const existingIndex = updatedGames.findIndex(game => game.id === gameData.id)
    
    if (existingIndex !== -1) {
      updatedGames.splice(existingIndex, 1)
    }
    
    updatedGames.unshift(gameData)
    if (updatedGames.length > 5) updatedGames.pop()
    
    localStorage.setItem('recentGames', JSON.stringify(updatedGames))
    setRecentGames(updatedGames)
  }

  // 初始化最近游玩列表
  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem('recentGames') || '[]')
    setRecentGames(savedGames)
  }, [])

  return (
    <div className="flex">
      <Head>
        <title>Game Warehouse</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 h-screen fixed left-0 overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-extrabold mb-8">Game Warehouse</h1>
          <nav>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setCurrentGame(null)} 
                  className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg font-bold"
                >
                  <span className="material-icons">home</span>
                  <span>Home</span>
                </button>
              </li>
              <li><a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg font-bold"><span className="material-icons">history</span><span>Recently Played</span></a></li>
              <li className="pt-4 border-t border-gray-700">
                <h2 className="text-lg font-extrabold text-gray-400 uppercase mb-2">Categories</h2>
              </li>
              <li><a href="#io" className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg font-bold"><span>.IO Games</span></a></li>
              <li><a href="#action" className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg font-bold"><span>Action</span></a></li>
              <li><a href="#puzzle" className="flex items-center space-x-2 text-gray-300 hover:text-white text-lg font-bold"><span>Puzzle</span></a></li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {currentGame ? (
          // 游戏展示区域
          <div className="w-full h-[calc(100vh-4rem)]">
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <h1 className="text-2xl font-bold mb-4">{currentGame.title}</h1>
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={currentGame.url}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ) : (
          // 游戏列表区域
          <>
            {/* Recently Played Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {recentGames.map(game => (
                  <div key={game.id} className="game-card block cursor-pointer" onClick={(e) => handleGameClick(e, game)}>
                    <div className="w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={game.image}
                        alt={game.title}
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        quality={75}
                        priority={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">{game.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* IO Games Section */}
            <section id="io" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">.IO Games</h2>
                <div className="flex space-x-2">
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('io-games', 'left')}>←</button>
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('io-games', 'right')}>→</button>
                </div>
              </div>
              <div className="game-slider-container relative">
                <div id="io-games" className="game-slider flex space-x-4 overflow-x-auto pb-4">
                  <div className="game-card block cursor-pointer" onClick={(e) => handleGameClick(e, {
                    id: 'bloxd',
                    title: 'Bloxd.io',
                    url: '/game/io/bloxd.html',
                    image: '/assets/images/games/io/bloxd.png'
                  })}>
                    <div className="w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src="/assets/images/games/io/bloxd.png"
                        alt="Bloxd.io"
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        quality={75}
                        priority={true}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">Bloxd.io</h3>
                  </div>
                  <div className="game-card block cursor-pointer" onClick={(e) => handleGameClick(e, {
                    id: 'count-masters',
                    title: 'Count Masters',
                    url: '/game/io/count-masters.html',
                    image: '/assets/images/games/io/count-masters.png'
                  })}>
                    <div className="w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src="/assets/images/games/io/count-masters.png"
                        alt="Count Masters"
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        quality={75}
                        priority={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">Count Masters</h3>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Games Section */}
            <section id="action" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Action Games</h2>
                <div className="flex space-x-2">
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('action-games', 'left')}>←</button>
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('action-games', 'right')}>→</button>
                </div>
              </div>
              <div className="game-slider-container relative">
                <div id="action-games" className="game-slider flex space-x-4 overflow-x-auto pb-4">
                  <div className="game-card block cursor-pointer" onClick={(e) => handleGameClick(e, {
                    id: 'stickman',
                    title: 'Stickman Destruction',
                    url: '/game/act/stickman.html',
                    image: 'https://placehold.co/384x256/1F2937/FFFFFF?text=Stickman+Destruction'
                  })}>
                    <div className="w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src="https://placehold.co/384x256/1F2937/FFFFFF?text=Stickman+Destruction"
                        alt="Stickman Destruction"
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        quality={75}
                        priority={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">Stickman Destruction</h3>
                  </div>
                </div>
              </div>
            </section>

            {/* Puzzle Games Section */}
            <section id="puzzle" className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Puzzle Games</h2>
                <div className="flex space-x-2">
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('puzzle-games', 'left')}>←</button>
                  <button className="slider-button bg-gray-700 hover:bg-gray-600 p-2 rounded-full" onClick={() => slideGames('puzzle-games', 'right')}>→</button>
                </div>
              </div>
              <div className="game-slider-container relative">
                <div id="puzzle-games" className="game-slider flex space-x-4 overflow-x-auto pb-4">
                  <div className="game-card block cursor-pointer" onClick={(e) => handleGameClick(e, {
                    id: 'word-games',
                    title: 'Word Games',
                    url: '/game/puz/word-games.html',
                    image: 'https://placehold.co/384x256/1F2937/FFFFFF?text=Word+Games'
                  })}>
                    <div className="w-48 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src="https://placehold.co/384x256/1F2937/FFFFFF?text=Word+Games"
                        alt="Word Games"
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        quality={75}
                        priority={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">Word Games</h3>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
} 