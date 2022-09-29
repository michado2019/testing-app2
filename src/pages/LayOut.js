import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LayOut() {
  return (
    <div className='layout'>
        <NavLink to='/' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>
        <h1 className='layoutNav'>Home</h1>
        </NavLink>{' '} <div className='layoutNav'>|</div>
        <NavLink to='about' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>
        <h1 className='layoutNav'>About</h1>
        </NavLink>{' '} <div className='layoutNav'>|</div>
        <NavLink to='items' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>
        <h1 className='layoutNav'>Items</h1>
        </NavLink>{' '} 
    </div>
  )
}
