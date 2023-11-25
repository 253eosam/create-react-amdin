import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { STYLE } from '@/common'
import { useApplicationStore } from '@/stores'
import Box from '@mui/material/Box'

export default function AppHeader() {
  const { auth } = useApplicationStore()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${STYLE.drawerWidth}px)` },
        ml: { sm: `${STYLE.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Box component={'div'} sx={{ flexGrow: 1, }}></Box>
        {auth && (
          <div>
            <Typography variant='subtitle1' component='span' >
              {'UserName'}
            </Typography>
            <IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleMenu} color='inherit'>
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
