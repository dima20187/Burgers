import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {SHRIPKING}=CHIKEN


const ShrimpKing = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={SHRIPKING} />
                <div className='ves'>
                    <p>Вес: 296г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >231</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.8 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >7.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >25.7 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка Чеддер - продукты переработки молока, следы кунжута. Соус "Со вкусом сыра Пармезан" - лактоза, яйца, следы горчицы, сельдерея. Котлета из сыра Моцарелла и Тильзитер - молочные продукты, глютен, следы сои, горчицы, сельдерея, яиц. Стрипсы куриные - молочные продукты, глютен, сельдерей.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Шримп Кинг</h1>
                    <h1 className='angus_price' >10.40 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Особенный и очень вкусный бургер из хрустящей куриной котлеты, свежего нарезанного салата, кетчупа и майонеза!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Шримп Кинг',image:SHRIPKING,price:10.40,quantity:1}))}} >В корзину</button>
                        
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {ShrimpKing}