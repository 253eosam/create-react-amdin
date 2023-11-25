import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RegisterPlugins from '@/plugins'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RegisterPlugins>
      <App />
    </RegisterPlugins>
  </React.StrictMode>,
)
