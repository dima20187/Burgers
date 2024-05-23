import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/CouterSlice'
import { CATEGORIES } from '../../Image/image/Categories'
import { ROLIMAGE } from '../../Image/ImageRol/RolImage'

const {CEZARROL}=ROLIMAGE

const CezarRoll = () => {

    const dispatch = useDispatch()

  return (
    <div className='angus_container' >
        <div className='angus_page'>
            <div className='angus' >
                <img className='angus_image' src={CEZARROL} />
                <div className='ves'>
                    <p>Вес: 180г</p>
                
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
                        <p className='sostav_gram' >10 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Жиры</p>
                        <p className='sostav_gram' >10.1 г</p>
                    </div>
                    <div className='bgu'>
                        <p className='sostav_name' >Углев.</p>
                        <p className='sostav_gram' >19.6 г</p>
                        
                    </div>
                                   
                </div>
                <div className='opis' >
                    <p className='opis_name ves' >Может содержать аллергены:</p>
                        <p className='opis_p' >Лепёшка тортилья - глютен пшеничный, следы молочных продуктов. Соус Цезарь - продукты яичные, лактоза. Сыр "Палермо" - молоко и продукты его переработки. Стрипсы куриные - глютен, сельдерей, продукты переработки молока, следы горчицы, кунжута, соевого белка, яичного белка.</p>
                    </div>  

                </div>
            </div>
            <div className='angus_infa' >
                <div className='angus_information'>
                    <div className='rr' >
                    <h1 className='angus_name' >Цезарь Ролл со стрипсами</h1>
                    <h1 className='angus_price' >9.70 руб.</h1>
                    </div>
                    <div className='angus_details' >
                        <p className='angus_details_infa' >Информация</p>
                        <p className='angus_ditails_opis' >Два сочных стрипса в хрустящей панировке в сочетании с свежим помидором и листьями салата, сыром Пармезан и фирменным соусом Цезарь в пшеничной лепешке.</p>
                                        
                    </div>
                    <div className='button_price' >
                        
                        <button onClick={()=>{dispatch(increment({name:'Шримп Ролл',image:CEZARROL,price:9.70,quantity:1}))}} >В корзину</button>
                    </div>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export {CezarRoll}