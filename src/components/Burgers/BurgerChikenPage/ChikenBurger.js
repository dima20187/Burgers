import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {CHIKENBURGER}=CHIKEN


const ChikenBurger= () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={CHIKENBURGER} />
                <div className='ves'>
                    <p>Вес: 123г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >234</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >6.5 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >10.8 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >27.9 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Булочка - кунжут, глютен пшеничный. Наггетсы - следы горчицы, сельдерея, молока, глютена. Майонез - яичный желток, следы сельдерея, молока, горчицы, и продуктов их переработки. Кетчуп - сельдерей.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Чикен Кинг</h1>
                    <h1 className='angus_price' >7.70 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Особенный и очень вкусный бургер из хрустящей куриной котлеты, свежего нарезанного салата, кетчупа и майонеза на нежной булочке.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Чикен Кинг',image:CHIKENBURGER,price:7.60,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {ChikenBurger}