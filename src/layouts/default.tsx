import AppContent from '@/components/AppContent'
import AppHeader from '@/components/AppHeader'
import AppSidebar from '@/components/AppSidebar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { STYLE, CONFIG } from '@/common'
import AppPathArea from '@/components/AppPathArea'

type Props = unknown

const Default: React.FC<Props> = () => {
  return (
    <Box>
      <CssBaseline />
      <AppHeader></AppHeader>
      <AppSidebar></AppSidebar>
      <Box sx={{ position: 'absolute', top: STYLE.appBar, left: 240, right: 0 }}>
          { CONFIG.isShowPathArea && (<AppPathArea/>)}
        <Box component={'main'} sx={{ position: 'relative', width: '100%', p: 3 }}>
          <AppContent />
        </Box>
      </Box>
    </Box>
  )
}

export default Default
