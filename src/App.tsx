import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestComponent from './components/TestComponent'
import DefaultLayout from '@/layouts/default'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="f" element={<TestComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
