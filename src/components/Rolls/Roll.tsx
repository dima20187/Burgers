import React from 'react'
import { useDispatch } from 'react-redux'
import { increment} from '../../store/slice/CouterSlice'
import { Shavuha } from './Items/RollItems'
import '../../styles/Water.css'
import { Link } from 'react-router-dom'
import {RollItem} from './components/RollItem'

const Roll = () => {

  const dispatch =useDispatch()

  return (
    <div className='burger_container' >
    <div className='burger' >
      
      <div className='burger_page' >
    {Shavuha.map(item=>(
      <RollItem item={item} key={item.id} />
    ))}
      </div>
    </div>
  </div>
  )
}

export {Roll}