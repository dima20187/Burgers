import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../../styles/Main.css'
import { Roll } from '../Rolls/Roll'
import { ChikenBurger } from '../ChikenBurgerPage/ChikenBurger'
import { BurgerPage } from '../BurgerPage/BurgerPage'
import { ColdWater } from '../ColdWaterPage/WaterPage'


const Main = () => {

  const [active,setActive]=useState(true)
 

  return (
    <div className="main">
     <div className= 'main__items' >
      <p className='main_p' ><Link className="main__item" activeClass='active' to='Govadina' smooth={true} duration={700} spy={true} offset={-150}>Бургеры из Говядины</Link></p>
      <p className='main_p' ><Link className="main__item" activeClass='active' to='Chiken_and_fish' smooth={true} duration={700} spy={true} offset={-147}>Бургеры из Курицы</Link></p>
      <p className='main_p' ><Link className="main__item" activeClass='active' to='Rolls' smooth={true} duration={700} spy={true} offset={-147}>Шаурма</Link></p>
      <p className='main_p'> <Link className="main__item" activeClass='active' to='Water' smooth={true} duration={700} spy={true} offset={-150} >Напитки</Link></p>
      <p className='main_p' ><Link className="main__item" activeClass='active' to='/' smooth={true} duration={700} spy={true} offset={-150} >Акции</Link></p>
    </div> 

    
  <div className='main_page'>
    <div  className='container_p' >
      <div id='Govadina'className='Cate' >
    <h2  >Бургеры из Говядины</h2>
     <BurgerPage/>
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
   <div  className='container_p' >
     <div id='Water' className='Cate' >
    <h2 >Напитки</h2>
    <ColdWater/>
    </div>
   </div>
  </div>
  </div>
  )
}

export {Main}