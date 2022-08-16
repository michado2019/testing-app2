import React from 'react'
import './SideBar.css'
import {AccountBalanceOutlined, DashboardOutlined, LightbulbOutlined, LocalTaxiOutlined, LogoutOutlined, QuizOutlined, WbIridescentOutlined} from '@mui/icons-material'
export default function SideBar() {

    const [currentLink, setCurrentLink] = React.useState(1)

  return (
    <div className='sideBar-wrapper'>
            <div className='sideBar-logo_div'>
            <LocalTaxiOutlined className='sideBar-logo'/>
            <h1 className='sideBar-logo_text'>GTaxi</h1>
            </div>
      <ul className='sideBar-list'>
        <li className={currentLink ===1 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(1)}>
        <div className='sideBar-list_flex'>
           <DashboardOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>Dashboard</h1>
        </div>
        </li>

        <li className={currentLink ===2 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(2)}>
        <div className='sideBar-list_flex'>
           <WbIridescentOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>Riders</h1>
        </div>
        </li>

        <li className={currentLink ===3 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(3)}>
        <div className='sideBar-list_flex'>
           <AccountBalanceOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>Payment Details</h1>
        </div>
        </li>

        <li className={currentLink ===4 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(4)}>
        <div className='sideBar-list_flex'>
           <LightbulbOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>Learning Center</h1>
        </div>
        </li>

        <li className={currentLink ===5 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(5)}>
        <div className='sideBar-list_flex'>
           <QuizOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>FAQs</h1>
        </div>
        </li>

        <li className={currentLink ===6 ? 'sideBar-list_items' : ''} onClick={()=> setCurrentLink(6)}>
        <div className='sideBar-list_flex'>
           <DashboardOutlined className='sideBar-list_icons'/>
           <h1 className='sideBar-icon_texts'>SettingsOutlined</h1>
        </div>
        </li>

       
      </ul>
      <div className='logOut'>
        <LogoutOutlined className='logOut-icon'/>
        <h1 className='logOut-text'>Logout</h1>
      </div>
    </div>
  )
}
