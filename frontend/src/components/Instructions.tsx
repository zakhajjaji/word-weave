'use client'

function Instructions() {
  return (
    <div className="w-full max-w-xl mx-auto my-12 bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-2 tracking-tight drop-shadow">
        How to Play Word Weave
      </h1>
      <p className="text-lg text-gray-200 text-center leading-relaxed">
        Welcome to <span className="font-bold text-blue-400">Word Weave!</span> Your goal is to form as many words as possible from the letter grid. Click on letter tiles to select them and build your word.<br /><br />
        <ul className="list-disc pl-8 text-left my-3 space-y-2">
          <li>You can select letters by clicking on the tiles.</li>
          <li>Selected letters must be adjacent (including diagonally).</li>
          <li>Form a valid word, then hit <span className="font-semibold text-green-400">Submit Word</span>!</li>
          <li>Use the <span className="font-semibold text-gray-300">Clear</span> button to start your selection over.</li>
          <li>Challenge yourself: try to find longer and more creative words for higher scores.</li>
        </ul>
        Good luck and have fun weaving words!
      </p>
    </div>
  )
}

export default Instructions