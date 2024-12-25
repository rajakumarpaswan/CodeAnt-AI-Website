import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
