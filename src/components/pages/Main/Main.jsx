import React from 'react'
import DashBoard from '../dashBoard/DashBoard'
import Riders from '../riders/Riders'
import './RightBar.css'

export default function Main() {
  return (
    <div className='rightBar-wrapper'>
      <DashBoard />
      <Riders />
    </div>
  )
}
