import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../Assets/icons'
import '../../styles/Korzina.css'
import { plusQuantity,minusQuantity,decrement } from '../../store/slice/CouterSlice'
import { RootState } from '@/store'


const {KORZINA} =IMAGE

const Korzina = () => {
    
    const  By = (arr: number[]) =>arr.reduce((previousValue, currentValue)=>  previousValue + currentValue,0)
    const stre = useSelector((state: RootState)=>state.b.burger)
    const user = useSelector((state: RootState)=>state.user.user)
    console.log(user.length)
    const dispatch =useDispatch()
        
    return (
    <div className='korzinaPage' >
     <div className='korzina' >
        {!stre.length ?(
        <div className='korzina_none' >
            <h1>Корзина пуста...</h1>
            <img src={KORZINA} alt='/' />
            </div> 
        ):(
        <div className='korzinaItem' >
        {stre.map(({name,image,price,quantity,id})=>(
            <div className='korzina_item_page'>
                <div className='korzina_image' >
                    <img src={image} alt='/' /><span className='delete_item' onClick={()=>dispatch(decrement(id))} >&#10060;</span>
                </div>
                <div className='korzina_name'>
                    <h3>{name}</h3>
                </div>
                <div className='quantity' >
                    <span onClick={()=>dispatch(minusQuantity({name,price}))} >&#10094;</span>
                    <p>{quantity}</p>
                    <span  onClick={()=>dispatch(plusQuantity({name,quantity}))}>&#10095;</span>
                </div>
                <div className='korzina_price' >
                    <p>{Math.round(price * quantity)} руб</p>
                </div>
            </div>
            
        ))}  
        
            <div>
                <div className='buy_container' >
                     <p className='korzina_buy' >Сумма заказа:<b>{By(stre.map(({price,quantity})=> Math.round(price * quantity)))} руб.</b></p>
                </div>
            </div>
            </div>)}
    </div>
</div>
  )
}

export  {Korzina}