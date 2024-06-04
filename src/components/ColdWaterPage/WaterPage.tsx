import React from 'react'
import { Water } from './Items/ColdWater'
import './styles/WaterStyles.css'
import { ColdWaterItems } from './components/ColdWaterItems'

const ColdWater = () => {
  return (
    <div className='water_container' >
      <div className='water' >
        <div className='water_page' >
      {Water.map(item=>(
        <ColdWaterItems item={item} key={item.id} />
      ))}
        </div>
      </div>
    </div>
  )
}

export  {ColdWater}