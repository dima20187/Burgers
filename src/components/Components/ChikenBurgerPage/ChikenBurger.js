import React from 'react'
import { Chiken } from '../../ChikenBurgerPage/Items/BurgersChiken'
import '../../../styles/Categories.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment } from '../../../store/slice/CouterSlice'

const ChikenBurger = () => {

const dispatch =useDispatch()

  return (
    <div className='burger_container' >
      <div className='burger' >
        
        <div className='burger_page' >
      {Chiken.map(({image,name, price,about,href,quantity},index)=>(
        <div className='burger_item' key={index}>
          <Link to={href} ><img src={image} alt='' /></Link>
          <div className='info' >
            <p className='burger_name' >{name}</p>
            <p className='burger_info' > <Link to={href} > {about}</Link></p>
            <div className='burger_buy' >
              <p className='burger_price' > {price} руб.</p>
              <button onClick={()=>{dispatch(increment({name,image,price,quantity}))}} >Купить</button>
            </div>
          </div>
          </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export {ChikenBurger}