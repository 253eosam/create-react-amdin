import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Link, styled } from '@mui/material';
import Common from '@/common'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = Common.style.DRAWER_WIDTH
const initPaths = (args: string[] = []) => (['home'].concat(args))

type Props = {
  open: boolean,
  setOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const TitleLink = styled(Link)(() => ({
  color: '#ffffff',
  cursor: 'pointer',
  ':hover': {
    color: '#ffffff',
    textDecorationColor: '#ffffff',
  }
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const AppHeader: React.FC<Props> = ({ open , setOpen }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [paths, setPaths] = useState(location.pathname.split('/'))

  const handleOnClickMvRouter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('data-path') ?? ''
    const pathArr = location.pathname.split('/')
    const targetIdx = pathArr.indexOf(target)
    const path = pathArr.slice(0, targetIdx+1).join('/') || '/'
    navigate(path)
  }
  
  useEffect(() => {
    const pathArr = initPaths(location.pathname.split('/').filter(item => item))
    setPaths(pathArr)
  }, [location.pathname])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {
            paths.map((path: string) => (
              <TitleLink onClick={handleOnClickMvRouter}  key={path} data-path={path}>
                {path.toUpperCase()}
              </TitleLink>
            )).map((element, index) => (
              <React.Fragment key={index}>
                {element}
                {index < paths.length - 1 && ' / '}
              </React.Fragment>
            ))
          }
        </Typography>
        <Typography align='right' variant='h6' component={'h1'} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Admin template
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
