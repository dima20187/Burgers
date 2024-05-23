import React, { useState } from 'react'
import { Categories } from './Categories'
import {  Link} from 'react-router-dom'
import { ColdWater } from './ColdWater'
import { Header } from './Header'
import { ChikenBurger } from './ChikenBurger'
import { Roll } from './Roll'
import '../Styles/Menu.css'
import { Text } from './Text'

const Menu = () => {

  const [categories,Setcategories]=useState(true)
  const [WaterCold,SetColdWater]=useState(false)
  const [Chiken,SetChiken]=useState(false)
  const[Rol,setRol]=useState(false)


   const Burger=(e)=>{
    Setcategories(true)
    SetColdWater(false)
    setRol(false)
    SetChiken(false)

   }
   const Water=(e)=>{
    SetColdWater(true)
    Setcategories(false)
    SetChiken(false)
    setRol(false)
   }
   const ChikenBur=(e)=>{
    SetChiken(true)
    SetColdWater(false)
    Setcategories(false)
    setRol(false)

   }

   const Ro=(e)=>{
    SetChiken(false)
    SetColdWater(false)
    Setcategories(false)
    setRol(true)
  }

  return (
    <div className='Manu_container' >
    <div className='Manu'>
          <ul>
            <li className={categories ===true ? 'Manu_active' : 'Manu_unactive'} onClick={Burger}   > Бургеры из говядины</li>
            <li className={Chiken ===true ? 'Manu_active' : 'Manu_unactive' }  onClick={ChikenBur} > Бургеры из курицы</li>
            <li className={Rol ===true ? 'Manu_active' : 'Manu_unactive' }  onClick={Ro} >Роллы</li>
            {/* <li><Link to='Kombo'>Комбо</Link></li>
            <li><Link>Картошка</Link></li> */}
            <li className={WaterCold ===true ? 'Manu_active' : 'Manu_unactive' }  onClick={Water} > Напитки</li>
            {/* <li><Link>Соусы</Link></li> */}
            {/* <li><Link>Новинки</Link></li> */}
            {/* <li><Link>Другое</Link></li> */}
          </ul>

          
         </div>
         {/* {categories ===true ? 
          <Categories/> : <Header/>
        }{Chiken  ===true? 
          <ChikenBurger/> : <Header/>
        }{ WaterCold  ===true? 
          <ColdWater/> : <Header/>
        }{
          Rol? 
          <Roll/> : <Header/>
      //   } */}
      <Text categories={categories} Chiken={Chiken} WaterCold={WaterCold} Rol={Rol} />
         </div>
  )
}

export { Menu}