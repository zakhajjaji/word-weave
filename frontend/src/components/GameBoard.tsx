import { useState } from 'react'

interface GameBoardProps {
    size: number
    onWordSubmit?: (word: string) => void
    onClearSelection?: () => void
    onShuffleBoard?: () => void
}

function GameBoard({ size = 4, onWordSubmit, onClearSelection, onShuffleBoard }: GameBoardProps){
    const generateBoard = (size: number): string[][] => {
       const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
       const board: string[][] = []
       const usedLetters: string[] = []
       
       for (let i = 0; i < size; i++) {
        const row: string[] = []
        
        for (let j = 0; j < size; j++) {
            let letter: string = letters[Math.floor(Math.random() * letters.length)]
            while (usedLetters.includes(letter)) {
                letter = letters[Math.floor(Math.random() * letters.length)]
            }
            row.push(letter)
            usedLetters.push(letter)
        }
        board.push(row)
       }
       return board
    }; 

const [board, setBoard] = useState<string[][]>(generateBoard(size))
const [selectedTiles, setSelectedTiles] = useState<Set<string>>(new Set())

const handleTileClick = (row: number, col: number) => {
    const tileKey = `${row}-${col}`;
    const newSelected = new Set(selectedTiles);
    if (newSelected.has(tileKey)) {
        newSelected.delete(tileKey);
    } else {
        newSelected.add(tileKey);
    }
    setSelectedTiles(newSelected);
}

const getSelectedWord = (): string => {
    const sortedTiles = Array.from(selectedTiles).map(key => {
        const [row, col] = key.split('-').map(Number);
        return { row, col };
    }).sort((a, b) => {
        if (a.row !== b.row) return a.row - b.row;
        return a.col - b.col;
    });
    return sortedTiles.map(({ row, col }) => board[row][col]).join('');
}

const clearSelection = () => {
  onClearSelection?.();
    setSelectedTiles(new Set());
}

const handleShuffle = () => {
  setBoard(generateBoard(size))
  setSelectedTiles(new Set())
  onShuffleBoard?.()
}

return  (
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Shuffle Button */}
          <button
            onClick={handleShuffle}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium text-white shadow-lg"
          >
            Shuffle Board
          </button>
          {/* Game Board Grid */}
          <div 
            className="grid gap-2 p-4 bg-gray-800 rounded-xl shadow-2xl w-full"
            style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
          >
            {board.map((row, rowIndex) =>
              row.map((letter, colIndex) => {
                const tileKey = `${rowIndex}-${colIndex}`
                const isSelected = selectedTiles.has(tileKey)
                
                return (
                  <button
                    key={tileKey}
                    onClick={() => handleTileClick(rowIndex, colIndex)}
                    className={`
                      w-16 h-16 text-2xl font-bold rounded-lg transition-all
                      ${isSelected 
                        ? 'bg-blue-500 text-white scale-110 shadow-lg' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                      }
                    `}
                  >
                    {letter}
                  </button>
                )
              })
            )}
          </div>

      {/* Selected Word Display */}
      {selectedTiles.size > 0 && (
        <div className="flex flex-col items-center gap-3 w-full bg-gray-800 rounded-xl p-4">
          <div className="text-lg font-semibold text-gray-300">
            Current Word: <span className="text-blue-400 font-bold text-xl">{getSelectedWord()}</span>
          </div>
          <div className="flex gap-3 w-full">
            <button
              onClick={clearSelection}
              className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-medium"
            >
              Clear
            </button>
            <button
              onClick={() => {
                const word = getSelectedWord()
                if (word.length >= 3) { // Minimum word length
                  onWordSubmit?.(word)
                }
                clearSelection()
              }}
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={getSelectedWord().length < 3}
            >
              Submit Word
            </button>
          </div>
        </div>
      )}
    </div>
    )
}

export default GameBoard

