import { Box, Typography, Button, Link } from '@mui/material'
import React from 'react'
import useStore from './store.ts'

type Props = unknown

const Home: React.FC<Props> = () => {
  const bears = useStore((state) => state.bears)
  const increase = useStore((state) => state.increase)

  return (
    <>
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

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={() => increase(1)}>
          zustand test : {bears} ++
        </Button>
      </Box>
    </>
  )
}

export default Home
