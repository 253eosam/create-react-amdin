import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { APPLICATION } from '@/common'
import Typography from '@mui/material/Typography'
import LogoIcon from '@/assets/icons/logo.svg?react'
import Link from '@mui/material/Link'

const drawerWidth = 240
type Props = unknown
const AppSidebar: React.FC<Props> = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Link href='/' color='inherit' underline='none'>
          <LogoIcon style={{ marginRight: 3, verticalAlign: 'text-bottom' }} />
          <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
            {APPLICATION.title}
          </Typography>
        </Link>
      </Toolbar>
      <Divider />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Home', 'inbox', 'starred', 'Send email'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['User', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default AppSidebar
