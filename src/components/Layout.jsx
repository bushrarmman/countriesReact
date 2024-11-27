import React from 'react'
import Header from './Header'
import Filter from './Filter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
 <>
<Header/>

 <Outlet />

 </>
  )
}

export default Layout
