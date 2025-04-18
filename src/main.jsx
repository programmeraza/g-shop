import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from '@rbnd/react-dark-mode'
import App from './App.jsx'
import './index.scss'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>,
)
