import React from 'react'
import './TopBar.css'

export default function TopBar() {

  return (
    <div className='topBar-wrapper'>
       <div className='topBar-top'>
          <div className='topBar-top_welcome'>
          <h1 className='topBar-top_name'>Hi, Sam Afolabi, </h1>
          <p className='topBar-top_greetings'>Welcome to<span className='topBar-top_app'>MY TAXI DASHBOARD</span></p>
          </div>
          <div className='topBar-search_div'>
          <input type='search' placeholder='search....' className='topBar-search'/>
        </div>
        </div>
    </div>
  )
}
