import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Instructions from './components/Instructions.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Instructions />
  </StrictMode>,
)
