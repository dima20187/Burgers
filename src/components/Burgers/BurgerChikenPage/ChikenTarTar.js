import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {CHIKENTARTAR}=CHIKEN


const ChikenTarTar= () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={CHIKENTARTAR} />
                <div className='ves'>
                    <p>Вес: 296г</p>
                
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
                        <p className='sostav_gram' >9.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >10.1 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >19.8 г</p>
                        
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
                    <h1 className='angus_name' >Чикен Тар-Тар </h1>
                    <h1 className='angus_price' >7.70 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Мы приготовили что-то особенное! Новый соус Тартар подчеркивает вкус сочной курочки с сыром Пармезан! А ещё внутри свежие томаты, салат Айсберг, рубленый лучок — на картофельной булочке с кунжутом.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Чикен Тар-Тар',image:CHIKENTARTAR,price:7.70,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {ChikenTarTar}