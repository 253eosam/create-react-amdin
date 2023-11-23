import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = unknown

const AppContent: React.FC<Props> = () => {

  return <Outlet />
}

export default AppContent
