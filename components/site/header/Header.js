import React from 'react'
import AuthMenu from '../../auth/AuthMenu'
export default function Header() {
  return (
    <div className='site-header'>
      <div className="site-logo">Header</div>
      <AuthMenu />
    </div>
  )
}
