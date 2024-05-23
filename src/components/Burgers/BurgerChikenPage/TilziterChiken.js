import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {TILZITERKING}=CHIKEN


const TilziterChiken = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={TILZITERKING} />
                <div className='ves'>
                    <p>Вес: 294г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >211</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.1 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >7.7 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >27.7 г</p>
                        
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
                    <h1 className='angus_name' >Тильзитер Кинг с Курицей</h1>
                    <h1 className='angus_price' >11.40 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Сырное золото! Хрустящая курочка под сырным соусом Пармеджано и тающий Тильзитер в золотистой корочке. А ещё порция свежих овощей: томаты, салат Айсберг и рубленый лучок — на ароматной булочке с сырной кляксой!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Тильзитер Кинг с Курицей',image:TILZITERKING,price:17.40,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {TilziterChiken}