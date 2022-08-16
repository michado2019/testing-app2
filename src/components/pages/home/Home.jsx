import React from 'react'
import './Home.css'
import Featured from '../featuredInfo/Featured'
import Chart from '../chart/Chart'
import { data } from '../../Data'
export default function home() {
  return (
    <div className='home-wrapper'>
       <Featured />
       <Chart data={data} dataKey="Active User" grid title="Users Analytics 2022"/>
    </div>
  )
}
