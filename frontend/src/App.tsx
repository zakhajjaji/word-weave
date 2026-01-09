import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Instructions from './components/Instructions'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full py-6 px-4 flex justify-center border-b border-gray-800">
        <img 
          src="/WORD-WEAVE-LOGO-2.png" 
          alt="Word Weave Logo" 
          className="h-16 md:h-20" 
        />
      </header>

      {/* Main Content - Column Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Instructions */}
          <aside className="lg:col-span-3">
            <Instructions />
          </aside>

          {/* Center Column - Game Board */}
          <section className="lg:col-span-6 flex flex-col items-center justify-start">
            <div className="w-full max-w-md">
              <GameBoard size={4} />
            </div>
          </section>

          {/* Right Column - Score Display */}
          <aside className="lg:col-span-3">
            {/* <ScoreDisplay score={0} wordsFound={0} /> */}
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App