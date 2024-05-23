import React from 'react'
import { KomboBurgers } from '../Burgers/Kombo'

const KomboKing = () => {
  return (
    <div className='burger_container' >
        <div className='burger' >
            {KomboBurgers.map(({image,price,name})=>(
                <ul>
                    <div className='test' >
                        <li> <img src={image} /></li>
                        <li className='burger_name' >{name}</li>
                        <li className='burger_price' >{price} руб.</li>
                    </div>
                </ul>
            ))}
        </div>
    </div>
  )
}

export {KomboKing}