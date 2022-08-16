import React from 'react'
import './Featured.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

export default function Featured() {
  return (
    <div className='featured-wrapper'>
        <div className='featured-div'>
        <span className='featured-titles'>Revenue</span>
        <div className='featured-money'>
           <span className='featured-amount'>$2,0000</span>
           <span className='featured-rate'>-2.1</span>
           <span className='featured-indicator'><ArrowDownward className='negative-featured'/></span>
        </div>
        <span className='featured-details'>Compared to last month</span>
        </div>
     
     
        <div className='featured-div'>
        <span className='featured-titles'>Sales</span>
        <div className='featured-money'>
           <span className='featured-amount'>$2,000</span>
           <span className='featured-rate'>-1.8</span>
           <span className='featured-indicator'><ArrowDownward className='negative-featured'/></span>
        </div>
        <span className='featured-details'>Compared to last month</span>
        </div>

        <div className='featured-div'>
        <span className='featured-titles'>Cost</span>
        <div className='featured-money'>
           <span className='featured-amount'>$2,234</span>
           <span className='featured-rate'>+2.1</span>
           <span className='featured-indicator'><ArrowUpward className='positive-featured'/></span>
        </div>
        <span className='featured-details'>Compared to last month</span>
        </div>
    </div>
  )
}
