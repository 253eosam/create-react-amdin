import { Box, Typography, Button, Link } from '@mui/material'
import React from 'react'
import useStore from './store.ts'

type Props = unknown

const Home: React.FC<Props> = () => {
  const bears = useStore((state) => state.bears)
  const increase = useStore((state) => state.increase)

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box>
        <Typography variant='h6'> Links </Typography>
        <ul>
          <li><Link sx={{ padding: '0 10px', borderRadius: '10%', bgcolor: 'pink' }} href={'/'}>/</Link></li>
          <li><Link sx={{ padding: '0 10px', borderRadius: '10%', bgcolor: 'pink' }} href={'/a'}>/a</Link></li>
          <li><Link sx={{ padding: '0 10px', borderRadius: '10%', bgcolor: 'pink' }} href={'/user'}>/user</Link></li>
          <li><Link sx={{ padding: '0 10px', borderRadius: '10%', bgcolor: 'pink' }} href={'/user/123/a'}>/user/123/a</Link></li>
        </ul>
      </Box>
      <Box>
        <Typography paragraph>
          You can click to path text of header that move target path.
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={() => increase(1)}>
          zustand test : {bears} ++
        </Button>
      </Box>
    </Box>
  )
}

export default Home
