import { Box, Link, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = unknown

const initPaths = (args: string[] = []) => (['home'].concat(args))

const AppPathArea: React.FC<Props> = () => {

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

  return (
    <Box component={'div'} sx={{
      height: 40,
      borderRadius: 1,
      border: 0
    }}
      bgcolor={'alpha'}
      color={'#000000'}
    >
      <Toolbar>
        <Typography noWrap component='div'>
          {
            paths.map((path: string) => (
              <Link onClick={handleOnClickMvRouter}  key={path} data-path={path} underline='none' href='#'>
                {path.toUpperCase()}
              </Link>
            )).map((element, index) => (
              <React.Fragment key={index}>
                {element}
                {index < paths.length - 1 && ' / '}
              </React.Fragment>
            ))
          }
        </Typography>
        
      </Toolbar>
    </Box>
  )
}

export default AppPathArea
