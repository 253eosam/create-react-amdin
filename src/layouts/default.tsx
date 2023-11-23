import AppContent from '@/components/AppContent'
import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

type Props = unknown

const Default: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader open={open} setOpen={setOpen}></AppHeader>
      <AppSidebar open={open} setOpen={setOpen}></AppSidebar>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
          <AppContent />
        </Box>
      </Box>
    </Box>
  )
}

export default Default
