import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import AnswerKey from './views/AnswerKey/AnswerKey'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnswerKey />
  </StrictMode>,
)
