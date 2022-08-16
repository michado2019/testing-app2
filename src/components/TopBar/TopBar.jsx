import React from 'react'
import './TopBar.css'
import { NotificationsNone, Settings, Language } from '@mui/icons-material'

export default function TopBar() {
  return (
    <div className='top-bar_wrapper'>
      <div className='top-bar_flex'>
        <img src='images/my--profile_pix (2).jpg' alt='img' className='logo' />
        <span className='logo-text'>Michado</span>
        <div className='top-bar_icons'>
          <div className='topBar-icons_img'>
            <NotificationsNone />
            <span className='notifications-badge'>2</span>
          </div>
          <div className='topBar-icons_img'>
            <Language />
            <span className='notifications-badge'>5</span>
          </div>
          <div className='topBar-icons_img'>
            <Settings />
          </div>
          <div className='topBar-icons_img'>
            <img src='images/my--profile_pix (2).jpg' alt='img' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}