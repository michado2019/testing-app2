import { CalendarMonthOutlined, EmailOutlined, GpsFixedOutlined, PhoneAndroidOutlined, PersonOutlined } from '@mui/icons-material'
import React from 'react'
import './Rider.css'

export default function Rider() {

  return (
    <div className='riderWrapper'>
      <h1 className='riderTitle'>Edit User</h1>
      <div className='riderFlex'>
        <div className='riderDetails-div'>
          <div className='riderDetails'>
            <img src='../images/my--profile_pix (2).jpg' alt='img' className='riderDetails-img' />
            <div className='riderDetails-info'>
              <div className='riderDetails-info_name'>Mike Adeshina</div>
              <div className='riderDetails-info_job'>Software Engineer</div>
            </div>
          </div>
          <label className='riderDetails-labels'>Account Details</label>
          <div className='riderDetails-flex'>
            <PersonOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>mike2022</div>
          </div>
          <div className='riderDetails-flex'>
            <CalendarMonthOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>24-08-2022</div>
          </div>
          <label className='riderDetails-labels'>Contact Details</label>
          <div className='riderDetails-flex'>
            <PhoneAndroidOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>+2348100075254</div>
          </div>
          <div className='riderDetails-flex'>
            <EmailOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>mike@gmail.com</div>
          </div>
          <div className='riderDetails-flex'>
            <GpsFixedOutlined className='riderDetails-icons' />
            <div className='riderDetails-icons_text'>IBADAN | NGA</div>
          </div>
        </div>
        <div className='riderEdit-div'>
          <div className='riderEdit-section_one'>
            hello
          </div>
          <div className='riderEdit-section_two'>
            hi
          </div>
        </div>
        
      </div>


    </div>
  )
}
