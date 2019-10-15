import * as React from 'react'
import {NavLink } from 'react-router-dom'

const Navigation = ():JSX.Element => {
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  )
}

export default Navigation