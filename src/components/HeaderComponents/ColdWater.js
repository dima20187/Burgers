import React from 'react'
import { Water } from '../Burgers/ColdWater'
import '../Styles/Water.css'

const ColdWater = () => {
  return (
    <div className='water_container' >
        <div className='water' >
            {Water.map(({image,name,price})=>(
              <ul>
                <div className='cin' >
                  <li>
                    <img src={image} />
                  </li>
                  <li className='name' >{name}</li>
                  <li className='price' > {price} руб.</li>
                </div>
              </ul>
            ))}
        </div>
    </div>
  )
}

export  {ColdWater}