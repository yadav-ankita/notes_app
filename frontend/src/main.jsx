import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/index.jsx'
import {Toaster} from 'react-hot-toast'
import { AppProvider } from './context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Navbar/>
          <App />     
        <Toaster />    
      </AppProvider>       
    </BrowserRouter>
  </StrictMode>,
)
