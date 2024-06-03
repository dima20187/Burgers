import React from 'react'
import { Chiken } from './components/Items/BurgersChiken'
import '../../styles/Categories.css'
import { useDispatch } from 'react-redux'
import { ChikenItem } from './components/ChikenItem'

const ChikenBurger = () => {

const dispatch =useDispatch()

  return (
    <div className='burger_container' >
      <div className='burger' >
        
        <div className='burger_page' >
      {Chiken.map(item=>(
        <ChikenItem item={item} key={item.id} />
      ))}
        </div>
      </div>
    </div>
  )
}

export {ChikenBurger}