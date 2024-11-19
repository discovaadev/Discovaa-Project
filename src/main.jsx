import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StyledEngineProvider } from '@mui/styled-engine';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
)
