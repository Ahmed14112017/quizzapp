import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Authcontextprovider from './Context/Authcontext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authcontextprovider>
    <App />
    </Authcontextprovider>
    
  </StrictMode>,
)
