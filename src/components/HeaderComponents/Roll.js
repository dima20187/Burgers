import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../redux/CouterSlice'
import { Shavuha } from '../Burgers/Roll'
import { Items } from '../Burgers/Categories'
import '../Styles/Water.css'
import { Link } from 'react-router-dom'

const Roll = () => {

  const dispatch =useDispatch()

  return (
    <div className='burger_container' >
    <div className='burger' >
      
      <div className='burger_page' >
    {Shavuha.map(({image,name, price,about,href,quantity})=>(
      <div className='burger_item'>
        <Link to={href} ><img src={image} /></Link>
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

export {Roll}