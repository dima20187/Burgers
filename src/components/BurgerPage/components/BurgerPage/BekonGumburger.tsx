import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../../../store/slice/CouterSlice'
import { CATEGORIES } from '../../../../Assets/BurgerImage/image/Categories'
import '../styles/Burger.css'
import { Button }from '../../../../ui-kit/Buttons/Button'

const {BEKONGAMBURGER}=CATEGORIES
const BekonGumburger = () => {

    const dispatch =useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={BEKONGAMBURGER} alt='/' />
                <div className='ves'>
                    <p>Вес: 104г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >265</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >8.8 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >14.2 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >26 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Майонез - яичный желток, следыы сельдерея, молока, горчицы, и продуктов их переработки. "Бекон" - следы молочных, соевых, яичных продуктов, злаков, горчицы. Соус Барбекью - глютен, соя
                        </p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Бекон Гамбургер</h1>
                    <h1 className='angus_price' >3.00 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Гамбургер по-новому, дымному! Мы добавили бекончик и много соуса Барбекю — получилось ароматно и сочно.</p>
                                        
                    </div>
                    <Button onClick={()=>dispatch(increment({name:'Бекон Гамбургер',image:BEKONGAMBURGER,price:3.00,quantity: 1}))} >В корзину</Button>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export {BekonGumburger}