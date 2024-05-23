import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {FISHBURGER}=CHIKEN


const FishBurger= () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={FISHBURGER} />
                <div className='ves'>
                    <p>Вес: 157г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >209</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >7 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >9.6 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >22.5 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный, продукты переработки яиц и молока. Филе минтая в панировке - рыба, следы яиц, сои, молока, сельдерея, горчицы. Соус Тар-Тар - горчица, продукты переработки яиц.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Фиш Бургер</h1>
                    <h1 className='angus_price' >8.30 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Скучали по мне? Обновлённый рецепт с нежным филе рыбки, богатым омега-3, под соусом Тар-тар, салатом Айсберг, луком и маринованным огурчиком на картофельной булочке с кунжутом!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Фиш Бургер',image:FISHBURGER,price:8.30,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {FishBurger}