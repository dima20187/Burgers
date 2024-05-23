import React from 'react'
import { IMAGE } from '../../Assets'
import '../Styles/Footer.css'


const {TELEGRAM, INSTAGRAM, VK,FACEBOOK, REVIEW, PAYMENT}=IMAGE

const Footer = () => {
  return (
    <div className='Footer' >
        <div className='footer_page' >
            <div className='footer_content'>
            ВСТУПАЙТЕ В НАШИ СООБЩЕСТВА И<br/> БУДЬТЕ В КУРСЕ ВСЕХ НОВОСТЕЙ
            </div>
            <div className='footer_image' >
            <a href='https://t.me/burgerkingbelarus' ><img src={TELEGRAM} /></a>
            <a href='https://www.instagram.com/burgerkingbelarus/' ><img src={INSTAGRAM} /></a>
            <a href='https://vk.com/burgerkingbelarus' ><img src={VK} /></a>
            <a href='https://www.facebook.com/burgerkingbelarus/' ><img src={FACEBOOK} /></a>
            </div>
            <div className='footer_input' >
               <input placeholder='ВАШ E-MAIL' />
               
               <div className='footer_text' >
               ПОДПИШИТЕСЬ И СЛЕДИТЕ ЗА ВСЕМИ АКЦИЯМИ И  НОВИНКАМИ БУРГЕР КИНГ
                </div>
                 <div className='footer_review'>
                 <a href='https://burger-king.by/about/otzyvy/' ><img  src={REVIEW} /></a>
                  <div className='footer_text_review' >
                  ПРОЙДИТЕ ОПРОС,<br/>
                  ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ!
                  </div>
                </div>
            </div>
        </div>
        <div className='footer_payment'>
         
          <img  src={PAYMENT} />
          <div className='footer_service' >
          <div className='footer_price' >
            Оплата
          </div>
          <div className='footer_wer' >
            Доставка
          </div>
          </div>
        </div>
        <div className='bottom'>
        © ООО «БУРГЕР БК», 2017, УНП 192415615, СВИДЕТЕЛЬСТВО О ГОС. РЕГИСТРАЦИИ ВЫДАНО МИНСКИМ ГОРИСПОЛКОМОМ 29 ЯНВАРЯ 2015 ГОДА. РЕСПУБЛИКА БЕЛАРУСЬ, 220125, Г. МИНСК, ПР-Т НЕЗАВИСИМОСТИ, Д.179, ПОМ.13
        </div>
    </div>
  )
}

export {Footer}