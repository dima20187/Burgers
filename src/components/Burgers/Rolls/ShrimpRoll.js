import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CATEGORIES } from '../../Image/image/Categories'
import { ROLIMAGE } from '../../Image/ImageRol/RolImage'

const {SHRIMPROL}=ROLIMAGE

const ShrimpRoll = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={SHRIMPROL} />
                <div className='ves'>
                    <p>Вес: 153г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >227</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >7.6 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >9.3 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >28.5 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Креветка - моллюски, продукты переработки молока, яиц. Лепёшка тортилья - глютен пшеничный, следы молочных продуктов. Соус ТАР-ТАР - горчица, продукты переработки яиц. Сыр плавленный - молоко и продукты его переработки.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Шрип Ролл</h1>
                    <h1 className='angus_price' >10.40 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Легкий ролл с нежными королевскими креветками в хрустящей панировке, свежий салат Айсберг и ломтик сыра в пшеничной лепешке под соусом Тар-Тар. Внимание! Блюдо содержит аллергены – морепродукты.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Шримп Ролл',image:SHRIMPROL,price:10.40,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {ShrimpRoll}