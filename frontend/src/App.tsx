import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <img src="/public/WORD-WEAVE-LOGO-2.png" alt="Word Weave Logo" className="h-24" />
        <a href="https://vite.dev" target="_blank" className="transition-all hover:drop-shadow-[0_0_2em_#646cffaa]">
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-all hover:drop-shadow-[0_0_2em_#61dafbaa]">
          <img src={reactLogo} className="h-24 p-6 motion-safe:animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-800 hover:border-blue-500 border border-transparent rounded-lg px-5 py-3 text-base font-medium transition-colors cursor-pointer"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-800 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
