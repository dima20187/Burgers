import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CHIKEN } from '../../Image/imageChiken/Chiken'
import '../BurgerStyle/Angus.css'

const {CEZARKING}=CHIKEN


const CezarKing= () => {

    const dispatch = useDispatch()



  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={CEZARKING} />
                <div className='ves'>
                    <p>Вес: 173г</p>
                
                </div>
                <div className='over' >
                    <p className='sostav_p' >На 100 г продукта:</p>
                
                <div className='sostav'>
                    <div className='bgu'>
                        <p className='sostav_name' >кКал</p>
                        <p className='sostav_gram' >264</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Белки</p>
                        <p className='sostav_gram' >7.5 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >9.1 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >21.3 г</p>
                        
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
                    <h1 className='angus_name' >Цезарь Кинг</h1>
                    <h1 className='angus_price' >5.30 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Особенный и очень вкусный бургер из хрустящей куриной котлеты, свежего нарезанного салата, кетчупа и майонеза на нежной булочке.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Цезарь Кинг',image:CEZARKING,price:5.30,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {CezarKing}