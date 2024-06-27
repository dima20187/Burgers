import { IItems } from '@/types/Items';
import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { increment } from '../../../store/slice/CouterSlice'
import { useDispatch } from 'react-redux';
import { ButtonList } from '../../../ui-kit/Buttons/ButtonList';

type IRoll = {
    item: IItems;
};

export const RollItem:FC<IRoll> = ({item})=> {

    const dispatch = useDispatch();

  return (
    <div className='burger_item' key={item.id}>
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
};