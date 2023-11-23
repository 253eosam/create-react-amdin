import AppHeader from '@/components/AppHeader'
import AppPathArea from '@/components/AppPathArea'
import AppSidebar from '@/components/AppSidebar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { Outlet } from 'react-router'

type Props = unknown

const Default: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader open={open} setOpen={setOpen}></AppHeader>
      <AppSidebar open={open} setOpen={setOpen}></AppSidebar>
      <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
        <AppPathArea></AppPathArea>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Default
