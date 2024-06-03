import React, { FC } from 'react'
import '../../../styles/Water.css'
import { IItems } from '@/types/Items'
import { Link } from 'react-scroll'
import { useDispatch } from 'react-redux'
import { increment } from '../../../store/slice/CouterSlice'

type IWater = {
  item: IItems
}

export const ColdWaterItems:FC<IWater> = ({item}) => {
  
  const dispatch = useDispatch()
  
  return (
    <div className='burger_item' key={item.id}>
    <Link to={item.href} ><img src={item.image} alt='' /></Link>
    <div className='info' >
      <p className='burger_name' >{item.name}</p>
      <p className='burger_info' > <Link to={item.href} > {item.about}</Link></p>
      <div className='burger_buy' >
        <p className='burger_price' > {item.price} руб.</p>
        <button onClick={()=>{dispatch(increment((item)))}} >Купить</button>
      </div>
    </div>
    </div>
  )
}

