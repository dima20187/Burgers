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
const AngusXl = () => {

    const dispatch =useDispatch()
  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={ANGUSXL} />
                <div className='ves'>
                    <p>Вес: 430г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >254</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >10.4 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >17.5 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >13.3 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Лук жареный - следы яиц, молока, сельдерея. Сыр Гауда - лизоцим (получен из белка куриных яиц). Соус Барбекью - глютен, соя. Майонез - яичный желток, следы сельдерея, молока, горчицы, и продуктов их переработки. "Бекон" - следы молочных, соевых, яичных продуктов, злаков, горчицы.
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Ангус Шеф XL</h1>
                    <h1 className='angus_price' >21.39 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >В этом красавце целых 300 граммов невероятно нежной 100% мраморной говядины Абердин Ангус, приготовленной на живом огне. Французская булочка бриошь со свежими овощами, луком фри, беконом и сыром Гауда. Ангус Шеф XL — это pro-сочность!</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>dispatch(increment({name:'Ангус Шеф XL', image:ANGUSXL, price: 21.39,quantity: 1}))} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {AngusXl}