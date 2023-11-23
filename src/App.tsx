import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '@/layouts/default'
import './App.css'
import AppContent from './components/AppContent'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="f" element={<AppContent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
