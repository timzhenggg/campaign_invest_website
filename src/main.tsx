import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ButtonVisibilityProvider } from './context/useButtonsVisibility.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ButtonVisibilityProvider>
      <App />
    </ButtonVisibilityProvider>
  </StrictMode>,
)
