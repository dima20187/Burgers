import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CATEGORIES } from '../../Image/image/Categories'
import '../BurgerStyle/Angus.css'
const {ANGUS,ANGUSXL,BIGKING,
    VOPPERD,VOPPERDABL,VOPPERCHEESE,
    DABLPVOPPERCHEESE,TILZITERKING,BEKONGAMBURGER,
    ANGUSPARMED,ANGUSPARMERDUBL,GRANDGHEESEFRESH,
    GRANDGHEESE,GAMBURGER,SWEDISHBURGER,
    CHEESEBURGER,DUBLCHEESEBURGER}=CATEGORIES
const AngusParmed = () => {
    const dispatch = useDispatch()
  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={ANGUSPARMED} />
                <div className='ves'>
                    <p>Вес: 295г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >235</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >13.3 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >18 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Сыр "Палермо" - молоко и продукты его переработки. Соус "Со вкусом сыра Пармезан" - лактоза, яйца, следы горчицы, сельдерея. Лук красный маринованный - сельдерей, следы глютена, яиц, рыбы, сои, молока, горчицы, моллюсков, ракообразных, кунжута, орехов, арахиса.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Ангус Пармеджано</h1>
                    <h1 className='angus_price' >13.89 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Наслаждайся каждым сырным укусом! Нежный мраморный бифштекс Абердин Ангус, пикантный Пармезан и щедрая порция соуса Пармеджано! А ещё внутри салат Романо, маринованный красный лучок и свежие томаты на мягкой булочке бриошь.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Ангус Пармеджано',image:ANGUSPARMED,price:13.89,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {AngusParmed}