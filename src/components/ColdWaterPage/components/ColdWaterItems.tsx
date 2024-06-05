import React, { FC } from 'react'
import '../styles/WaterStyles.css'
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
    <div className='water_item' key={item.id}>
    <Link to={item.href} ><img className='water_img' src={item.image} alt='' /></Link>
    <div className='info_items' >
      <p className='water_name' >{item.name}</p>
      <p className='water_info' > <Link to={item.href} > {item.about}</Link></p>
      <div className='water_buy' >
        <p className='water_price' > {item.price} руб.</p>
        <button onClick={()=>{dispatch(increment((item)))}} >Купить</button>
      </div>
    </div>
    </div>
  )
}

