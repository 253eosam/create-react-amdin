import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/layouts/default'

// import AppContent from '@/components/AppContent'
import React from 'react'

const Home = React.lazy(() => import('@/views/home'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<Home />} />
        <Route path='a' element={<Home />} />
        <Route path='b' element={<Home />} />
      </Route>
      <Route path='/user' element={<DefaultLayout />}>
        <Route path='' element={<Home />} />
        <Route path=':id'>
          <Route path='a' element={<Home />} />
        </Route>
      </Route>
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  )
}
