import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart({data, grid, dataKey, title}) {
 
  return (
    <div className='chart-wrapper'>
        <h3 className='chart-title'>{title}</h3>
    <ResponsiveContainer width="100%" aspect={3 / 1}>
    <LineChart data={data}>
    <XAxis dataKey="month" stroke='#5550ed'/>
    <Line type="monotone" dataKey={dataKey} stroke='#5550ed'/>
    <Tooltip />
    {grid && <CartesianGrid stroke='#c8dfdf' strokeDasharray="5 5"/>}
    <Legend />
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
}
