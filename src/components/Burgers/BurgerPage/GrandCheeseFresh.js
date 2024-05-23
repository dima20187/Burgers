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
const GrandCheeseFresh= () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={GRANDGHEESEFRESH} />
                <div className='ves'>
                    <p>Вес: 198г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >301</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >9.2 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >11.3 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >15 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Соус Горчичный – горчица и продукты её переработки; Кетчуп – сельдерей; Булочка – кунжут, глютен пшеничный. Сыр плавленный - молоко и продукты его переработки.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Гранд Чиз Фреш</h1>
                    <h1 className='angus_price' >8.29 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Особенная версия Гранд Чиза — со свежими овощами. Новый бифштекс по-домашнему (к фирменной говядине мы добавили немного сочной курочки), ломтики сыра Чеддер, хрустящий Айсберг, помидоры, лук, маринованные огурчики, кетчуп и горчица. Это точно сочно!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>dispatch(increment({name:'Гранд Чиз Фреш',image:GRANDGHEESEFRESH,price:8.29,quantity: 1}))} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {GrandCheeseFresh}