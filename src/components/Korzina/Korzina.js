import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGE } from '../../Assets'
import '../Styles/Korzina.css'
import { plusQuantity,minusQuantity,decrement } from '../redux/CouterSlice'
import Modal from '../HeaderComponents/Modal'
import { Link } from 'react-router-dom'



const {KORZINA, DELETE} =IMAGE

const Korzina = () => {


    const  By =(arr) =>arr.reduce((previousValue, currentValue)=>  previousValue + currentValue,0)

    const stre = useSelector(state=>state.b.burger)
    const user = useSelector(state=>state.user.user)
    console.log(user.length)
    const dispatch =useDispatch()

const userPrifile=()=>{
    if(user.length === 0){
        alert('Пожалуйста пройдите авторизацию')
        
    }else{
        alert('Заказ принят')
    }
}
    return (
//     <div className='korzina' >
//     {!stre.length ?  (
//         <div className='korzina_non' >
//             <h1>Корзина пуста....  </h1>
//         <img className='nothing' src={KORZINA} />
//         </div>
//     ):(
//     <div className='korzina_active' ><h1>Ваши товары:</h1>
//         <div className='korzina_r'>
//         {stre.map(({name,image,price,quantity,id})=>(
           
//             <div className='korzina_price' >
         

//                 <img src={image} /><span className='delete' onClick={()=>{dispatch(decrement(id))}} >&#10060;</span>
              
//                 <div className='korzina_info' >
//                     <div className='name_container' >
//                       <p className='korzina_name' >{name}</p>  
//                     </div>
//                     <div className='item_quantity' >
//                   <div className='quantity' >      
//             <span className='minus' onClick={()=>dispatch(minusQuantity({name,quantity,id}))} >&#10094;</span>    
//                     <p>{quantity}</p>
//              <span className='plus'  onClick={()=>dispatch(plusQuantity({name, quantity}))} >&#10095;</span>
//                    </div>
//                    </div>


//                     <div className='buy_container' >
//                         <p className='korzina_buy' >{Math.max(price * quantity).toFixed(2   )} руб.</p>
//                     </div>
//                 </div>
//                 </div>  
           
       
//         ))}
//  <div className='korzina_price_final' >
//     <p className='price_final' >Стоимость вашего заказа составляет: <span>{By(stre.map(({price,quantity})=> Math.max(price * quantity)))} руб.</span></p> 
//     <button onClick={userPrifile} className='korzina_button' >Оформить заказ</button>
//     </div>

//         </div>
//         </div>)}
//     </div>

<div className='korzinaPage' >
    <div className='korzina' >
        {!stre.length ?(
        <div className='korzina_none' >
            <h1>Корзина пуста...</h1>
            <img src={KORZINA}/>
            </div> 
        ):(
        <div className='korzinaItem' >
        {stre.map(({name,image,price,quantity,id})=>(
            <div className='korzina_item_page'>
                <div className='korzina_image' >
                    <img src={image} /><span className='delete_item' onClick={()=>dispatch(decrement(id))} >&#10060;</span>
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
        </div>)}
            <div>
                <div className='buy_container' >
                     <p className='korzina_buy' >Сумма заказа: <b>{By(stre.map(({price,quantity})=> Math.round(price * quantity)))} руб.</b></p>
                </div>
            </div>
    </div>
</div>
  )
}

export  {Korzina}