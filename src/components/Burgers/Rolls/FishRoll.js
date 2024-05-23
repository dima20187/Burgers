import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CATEGORIES } from '../../Image/image/Categories'
import { ROLIMAGE } from '../../Image/ImageRol/RolImage'

const {FISHROL}=ROLIMAGE

const FishRoll = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={FISHROL} />
                <div className='ves'>
                    <p>Вес: 155г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >202</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >7.2 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >9.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >22.2 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ' >Может содержать аллергены:</p>
                        <p className='opis_p' >Лепешка тортилья - глютен пшеничный, следы молочных продуктов. Филе минтая в панировке - рыба, следы яиц, сои, молока, сельдерея, горчицы. Соус Тар-Тар - горчица, продукты перарботки яиц.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Фиш Ролл</h1>
                    <h1 className='angus_price' >9.30 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Такая рыбка тебе понравится! Польза омега-3 в нежном рыбном филе под соусом Тар-тар, хрустящие маринованные огурчики, салат Айсберг и лук в румяной тортилье — легко, вкусно и полезно!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Фиш Ролл',image:FISHROL,price:9.30,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {FishRoll}