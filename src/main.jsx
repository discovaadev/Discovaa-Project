import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { StyledEngineProvider } from '@mui/styled-engine';
import 'swiper/css';
import 'swiper/css/autoplay'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>
);
