import React from 'react'
import './SideBar.css'
import { HomeOutlined, OutlinedFlagOutlined, ShoppingBagOutlined, CandlestickChartOutlined, MessageOutlined, Announcement, LocalPostOfficeOutlined, AccountBalanceOutlined, ProductionQuantityLimitsOutlined, AccountCircleOutlined, AnalyticsOutlined, AssessmentOutlined, MonetizationOnOutlined } from '@mui/icons-material'

export default function SideBar() {
  return (
    <div className='side-bar_wrapper'>
      <div className='side-bar_navbar'>
      <h1 className='sideBar-navBar_titles'>Dashboard</h1>
      <ul className='sideBar-navBar_flex'>
        <li className='sideBar-navBar_lists'>
            <HomeOutlined />
            <h3 className='links'>Home</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <AnalyticsOutlined />
            <h3 className='links'>Analytics</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <MonetizationOnOutlined />
            <h3 className='links'>Sales</h3>
        </li>
      </ul>
      
      </div>

      <div className='side-bar_navbar'>
      <h1 className='sideBar-navBar_titles'>Quick Menu</h1>
      <ul className='sideBar-navBar_flex'>
        <li className='sideBar-navBar_lists'>
            <AccountCircleOutlined />
            <h3 className='links'>Users</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <ProductionQuantityLimitsOutlined />
            <h3 className='links'>Products</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <AccountBalanceOutlined />
            <h3 className='links'>Transactions</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <AssessmentOutlined />
            <h3 className='links'>Reports</h3>
        </li>
      </ul>
      
      </div>

      <div className='side-bar_navbar'>
      <h1 className='sideBar-navBar_titles'>Notifications</h1>
      <ul className='sideBar-navBar_flex'>
        <li className='sideBar-navBar_lists'>
            <LocalPostOfficeOutlined />
            <h3 className='links'>Mail</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <Announcement />
            <h3 className='links'>Feedback</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <MessageOutlined />
            <h3 className='links'>Messages</h3>
        </li>
      </ul>
      
      </div>

      <div className='side-bar_navbar'>
      <h1 className='sideBar-navBar_titles'>Staff</h1>
      <ul className='sideBar-navBar_flex'>
        <li className='sideBar-navBar_lists'>
            <ShoppingBagOutlined />
            <h3 className='links'>Manage</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <CandlestickChartOutlined />
            <h3 className='links'>Analytics</h3>
        </li>
        <li className='sideBar-navBar_lists'>
            <OutlinedFlagOutlined />
            <h3 className='links'>Reports</h3>
        </li>
      </ul>
      
      </div>
    </div>
  )
}
