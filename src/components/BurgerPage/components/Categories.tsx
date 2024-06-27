import React, { FC } from 'react'
import '../../../styles/Categories.css'
import { increment } from '../../../store/slice/CouterSlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IItems } from '../../../types/Items'
import { RootState } from '../../../store'
import { ButtonList } from '../../../ui-kit/Buttons/ButtonList'

type IBurger = {
  item: IItems;
}

export const Categories:FC<IBurger> = ({item}) => {
  const stre = useSelector((state: RootState)=>state.b.burger)
  console.log(stre)
  const dispatch = useDispatch()
  
  return (
    <div className='burger_item' key={item.id} >
    <Link to={item.href!} ><img src={item.image} alt='' /></Link>
    <div className='info' >
      <p className='burger_name' >{item.name}</p>
      <p className='burger_info' > <Link to={item.href!} > {item.about}</Link></p>
      <div className='burger_buy' >
        <p className='burger_price' > {item.price} руб.</p>
        <ButtonList onClick={()=>{dispatch(increment((item)))}} >Купить</ButtonList>
      </div>
    </div>
  </div>
  )
}


