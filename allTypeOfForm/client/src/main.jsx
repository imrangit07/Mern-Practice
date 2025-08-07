import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div style={{background:"black",color:"white",height:"100vh",width:"100vw"}}>
    <App />
  </div>,
)
