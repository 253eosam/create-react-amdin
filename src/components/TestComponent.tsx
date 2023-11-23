import Button from '@mui/material/Button'
import React from 'react'

type Props = unknown

const TestComponent: React.FC<Props> = () => {

  return (
    <div>
      Nice Test Component
      <Button variant="contained">Hello world</Button>;
    </div>
  )
}

export default TestComponent
