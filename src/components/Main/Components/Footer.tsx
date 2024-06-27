import React from 'react'
import { IMAGE } from '../../../Assets/icons'
import '../../../styles/Footer.css'


const {TELEGRAM, INSTAGRAM, VK,FACEBOOK, REVIEW, PAYMENT}=IMAGE

const Footer = () => {
  return (
    <div className='Footer' >
        <div className='footer_page' >
            <div className='footer_content'>
              <p>ВСТУПАЙТЕ В НАШИ СООБЩЕСТВА И<br/> БУДЬТЕ В КУРСЕ ВСЕХ НОВОСТЕЙ</p>
            </div>
            <div className='footer_image' >
              <a href='https://t.me/burgerkingbelarus' ><img src={TELEGRAM} alt='' /></a>
              <a href='https://www.instagram.com/burgerkingbelarus/' ><img src={INSTAGRAM} alt=''/></a>
              <a href='https://vk.com/burgerkingbelarus' ><img src={VK} alt='/' /></a>
              <a href='https://www.facebook.com/burgerkingbelarus/' ><img src={FACEBOOK} alt=''/></a>
            </div>
            <div className='footer_input' >
               <input placeholder='ВАШ E-MAIL' />
               <div className='footer_text' >
                  <p>ПОДПИШИТЕСЬ И СЛЕДИТЕ ЗА ВСЕМИ АКЦИЯМИ И  НОВИНКАМИ БУРГЕР КИНГ</p>
              </div>
                 <div className='footer_review'>
                 <a href='https://burger-king.by/about/otzyvy/' ><img  src={REVIEW} alt='/' /></a>
                  <div className='footer_text_review' >
                    <p>ПРОЙДИТЕ ОПРОС,<br/>
                    ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ!
                    </p>
                  </div>
                </div>
            </div>
        </div>
        <div className='footer_payment'>
          <img  src={PAYMENT} alt='/' />
            <div className='footer_service' >
              <div className='footer_price' >
                <p>Оплата</p>
              </div>
              <div className='footer_wer' >
                <p>Доставка</p>
              </div>
            </div>
        </div>
        <div className='bottom'>
          <p>© ООО «БУРГЕР БК», 2017, УНП 192415615, СВИДЕТЕЛЬСТВО О ГОС.
            РЕГИСТРАЦИИ ВЫДАНО МИНСКИМ ГОРИСПОЛКОМОМ 29 ЯНВАРЯ 2015 ГОДА. 
            РЕСПУБЛИКА БЕЛАРУСЬ, 220125, Г. МИНСК, ПР-Т НЕЗАВИСИМОСТИ, Д.179, ПОМ.13
          </p>
        </div>
    </div>
  )
}

export {Footer}