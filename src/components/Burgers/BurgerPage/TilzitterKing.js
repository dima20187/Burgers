import React from 'react'
import { CATEGORIES } from '../../Image/image/Categories'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import '../BurgerStyle/Angus.css'
const {ANGUS,ANGUSXL,BIGKING,
    VOPPERD,VOPPERDABL,VOPPERCHEESE,
    DABLPVOPPERCHEESE,TILZITERKING,BEKONGAMBURGER,
    ANGUSPARMED,ANGUSPARMERDUBL,GRANDGHEESEFRESH,
    GRANDGHEESE,GAMBURGER,SWEDISHBURGER,
    CHEESEBURGER,DUBLCHEESEBURGER}=CATEGORIES
const TilzitterKing = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={TILZITERKING} />
                <div className='ves'>
                    <p>Вес: 304г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >220</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.3 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >10.7 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >22.3 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка Чеддер - продукты переработки молока, следы кунжута. Соус "Со вкусом сыра Пармезан" - лактоза, яйца, следы горчицы, сельдерея. Котлета из сыра Моцарелла и Тильзитер - молочные продукты, глютен, следы сои, горчицы, сельдерея, яиц
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Тильзитер Кинг</h1>
                    <h1 className='angus_price' >10.99 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Сыр тает. И ты тоже! Фирменный бифштекс из 100%-й говядины под одеялом из тающего Тильзитера с щедрой порцией очень сырного соуса Пармеджано. А ещё свежие овощи: томаты, салат Айсберг и лук — для большей сочности. Всё на нашей любимой булочке с сырной кляксой!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>dispatch(increment({name: 'Тильзитер Кинг', image:TILZITERKING,price:10.99,quantity: 1}))} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {TilzitterKing}