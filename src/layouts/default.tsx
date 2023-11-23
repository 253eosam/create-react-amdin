import AppHeader from '@/components/AppHeader'
import React from 'react'
import { Outlet } from 'react-router'

type Props = unknown

const Default: React.FC<Props> = () => {

  return (
    <div>
      <AppHeader></AppHeader>
      <Outlet/>
    </div>
  )
}

export default Default
