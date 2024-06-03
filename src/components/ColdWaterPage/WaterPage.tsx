import React from 'react'
import { Water } from './Items/ColdWater'
import '../../styles/Water.css'
import { ColdWaterItems } from './components/ColdWaterItems'

const ColdWater = () => {
  return (
    <div className='burger_container' >
      <div className='burger' >
        <div className='burger_page' >
      {Water.map(item=>(
        <ColdWaterItems item={item} key={item.id} />
      ))}
        </div>
      </div>
    </div>
  )
}

export  {ColdWater}