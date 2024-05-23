import React, { useState } from 'react'
import { Link, animateScroll } from 'react-scroll'
import '../Styles/Main.css'
import { Header } from './Header'
import { Footer } from './Footer'

import { AboutUs } from './AboutUs'
import { Categories } from './Categories'
import { Roll } from './Roll'
import { ChikenBurger } from './ChikenBurger'
import Modal from './Modal'




const Main = () => {

  const [active,setActive]=useState(true)
 

  return (
    <div class="main">

     <div class= 'main__items' >

      <p className='main_p' ><Link class="main__item" activeClass='active' to='Govadina' smooth={true} duration={700} spy={true} offset={-150}>Бургеры из Говядины</Link></p>
      <p className='main_p' ><Link class="main__item" activeClass='active' to='Chiken_and_fish' smooth={true} duration={700} spy={true} offset={-147}>Бургеры из Курицы</Link></p>
      <p className='main_p' ><Link class="main__item" activeClass='active' to='Rolls' smooth={true} duration={700} spy={true} offset={-147}>Шаурма</Link></p>
      <p className='main_p'> <Link class="main__item" activeClass='active' to='/' smooth={true} duration={700} spy={true} offset={-150} >Напитки</Link></p>
      <p className='main_p' ><Link class="main__item" activeClass='active' to='/' smooth={true} duration={700} spy={true} offset={-150} >Акции</Link></p>
      {/* <p className='main_p'> <Link class="main__item" activeClass='active' to='/' smooth={true} duration={700} spy={true} offset={-150} >Blog</Link></p>
      <p className='main_p'> <Link class="main__item" activeClass='active' to='/' smooth={true} duration={700} spy={true} offset={-150} >Sign in</Link></p> */}
      
    </div> 

    
  <div className='main_page'>
    <div  className='container_p' >
      <div id='Govadina'className='Cate' >
    <h2  >Бургеры из Говядины</h2>
     <Categories/> 
    </div>
   </div>
   
   <div  className='container_p' >
    <div id='Chiken_and_fish' className='Cate' >
    <h2 >Бургеры из Курицы и Рыбы</h2>
    <ChikenBurger/>
    </div>
   </div>
   
   <div  className='container_p' >
     <div id='Rolls' className='Cate' >
    <h2 >Роллы</h2>
    <Roll/>
    </div>
   </div> 
      
  </div>
  </div>
  )
}

export {Main}