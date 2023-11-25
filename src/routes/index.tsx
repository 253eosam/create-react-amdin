import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/layouts/default'
import React from 'react'

const Home = React.lazy(() => import('@/views/home'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<Home />} />
        <Route path='inbox' element={<Home />} />
        <Route path='starred' element={<Home />} />
        <Route path='send-email' element={<Home />} />
        <Route path='user'>
          <Route path='' element={<Home />} />
          <Route path=':id' element={<Home />}>
            <Route path='send-email' element={<Home />} />
          </Route>
        </Route>
      </Route>
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  )
}
