function Instructions() {
  return (
    <div className="w-full bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold text-blue-400 mb-2 tracking-tight">
        How to Play
      </h2>
      
      <div className="text-gray-200 text-sm leading-relaxed space-y-3">
        <p>
          Welcome to <span className="font-bold text-blue-400">Word Weave!</span> Your goal is to form as many words as possible from the letter grid.
        </p>
        
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Click on letter tiles to select them</li>
          <li>Selected letters must be adjacent (including diagonally)</li>
          <li>Form a valid word, then hit <span className="font-semibold text-green-400">Submit Word</span></li>
          <li>Use <span className="font-semibold text-gray-300">Clear</span> to reset your selection</li>
          <li>Longer words score higher points</li>
        </ul>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-2">
        <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-left">
          How to calculate points?
        </button>
        <button className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-left">
          How to play with friends?
        </button>
      </div>
    </div>
  )
}

export default Instructions