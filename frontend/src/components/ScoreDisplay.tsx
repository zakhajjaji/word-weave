'use client'

interface WordEntry {
  word: string
  score: number
  timestamp: number
  isValidWord?: boolean
  isSubmitted?: boolean
}

interface ScoreDisplayProps {
  score?: number
  wordsFound?: number
  recentWords?: WordEntry[]
  longestWord?: string
  isValidWord?: boolean
  isSubmitted?: boolean
}
