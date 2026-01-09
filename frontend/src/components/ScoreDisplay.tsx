'use client'

interface ScoreDisplayProps {
  score?: number
  wordsFound?: number
} 

function ScoreDisplay({ score = 0, wordsFound = 0 }: ScoreDisplayProps) {
  return (
    <div className="w-full bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold text-blue-400 mb-2 tracking-tight">Score</h2>
      {score && (
        <div className="text-3xl font-bold text-green-400">{score}</div>
      )}
      {wordsFound && (
        <div className="text-2xl font-semibold text-blue-400">{wordsFound}</div>
      )}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">Recent Words</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          <div className="text-sm text-gray-400 italic">No words submitted yet</div>
        </div>
      </div>
    </div>
  )
}

export default ScoreDisplay