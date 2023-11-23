import React from 'react'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const AppContainer: React.FC<Props> = ({ children }) => {
  return <Outlet/> 
}

export default AppContainer
