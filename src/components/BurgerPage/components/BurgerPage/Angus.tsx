import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {ANGUS}=CATEGORIES

const Angus = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={ANGUS} alt='/' />
                <div className='ves'>
                    <p>Вес: 295г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >255</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >16.3 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >17.4 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Сыр "Палермо" - молоко и продукты его переработки. Соус "Со вкусом сыра Пармезан" - лактоза, яйца, следы горчицы, сельдерея. Лук красный маринованный - сельдерей, следы глютена, яиц, рыбы, сои, молока, горчицы, моллюсков, ракообразных, кунжута, орехов, арахиса.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Ангус Шеф</h1>
                    <h1 className='angus_price' >14.99 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Наслаждайся каждым сырным укусом! Нежный мраморный бифштекс Абердин Ангус, пикантный Пармезан и щедрая порция соуса Пармеджано! А ещё внутри салат Романо, маринованный красный лучок и свежие томаты на мягкой булочке бриошь.</p>
                                        
                    </div>
                        <Button onClick={()=>{
                            dispatch(increment({
                            name:'Ангус Шеф',
                            image:ANGUS,
                            price:14.99,
                            quantity:1}))
                            }}>
                            В корзину
                        </Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {Angus}