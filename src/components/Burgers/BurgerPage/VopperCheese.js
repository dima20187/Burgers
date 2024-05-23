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
const VopperCheese = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={VOPPERCHEESE} />
                <div className='ves'>
                    <p>Вес: 293г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >208</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >8.2 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >12.1 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >16.7 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Майонез – яичный желток, следы сельдерея, молока, горчицы, и продуктов их переработки; Кетчуп – сельдерей; Булочка – кунжут, глютен пшеничный. Сыр поавленный - молоко и продукты его переработки
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Воппер с сыром</h1>
                    <h1 className='angus_price' >9.89 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Приготовленный на огне бифштекс из 100% говядины, два нежных ломтика сыра, сочные помидоры, свежий нарезанный салат, густой майонез, хрустящие огурчики и свежий лук на нежной булочке с кунжутом.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>dispatch(increment({name:'Воппер с сыром',image:VOPPERCHEESE,price:9.89,quantity: 1}))} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {VopperCheese}