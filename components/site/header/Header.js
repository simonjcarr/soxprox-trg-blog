import React from 'react'
import AuthMenu from '../../auth/AuthMenu'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <div className='site-header'>
      <div className="site-logo">Header</div>
      <div className="header-menus">
        <HeaderMenu />
        <AuthMenu />
      </div>
    </div>
  )
}
