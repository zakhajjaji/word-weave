'use client'

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
        <Instructions/>
      </header>
     
    </div>
  )
}

export default App
