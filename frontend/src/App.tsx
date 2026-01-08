import { useState } from 'react'
import GameBoard from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <img src="/public/WORD-WEAVE-LOGO-2.png" alt="Word Weave Logo" className="h-24" />
        
      </div>
      <div className="p-8">
        <GameBoard size={4} />
      </div>
    </div>
  )
}

export default App
