import { useState } from 'react'

interface GameBoardProps {
    size: number
}

function GameBoard({ size = 4 }: GameBoardProps){
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

const [board] = useState<string[][]>(generateBoard(size))
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
    setSelectedTiles(new Set());
}

return  (
        <div className="flex flex-col items-center gap-4">
          {/* Game Board Grid */}
          <div 
            className="grid gap-2 p-4 bg-gray-800 rounded-lg"
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
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl font-semibold">
            Word: <span className="text-blue-400">{getSelectedWord()}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearSelection}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Clear
            </button>
            <button
              onClick={() => {
                const word = getSelectedWord()
                console.log('Submitting word:', word)
                // TODO: Call API to validate word
                clearSelection()
              }}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
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

