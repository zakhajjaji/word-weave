import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScoreDisplay from './components/ScoreDisplay.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ScoreDisplay/>
  </StrictMode>,
)
