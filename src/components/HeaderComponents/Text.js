
import React, { useState } from 'react'
import { Categories } from './Categories'
import {  Link} from 'react-router-dom'
import { ColdWater } from './ColdWater'
import { Header } from './Header'
import { ChikenBurger } from './ChikenBurger'
import { Roll } from './Roll'

const Text = ({categories, Chiken,WaterCold,Rol}) => {


  return (
    <div>
         {categories ===true ? 
          <Categories/> : <Header/>
        }{Chiken  ===true? 
          <ChikenBurger/> : <Header/>
        }{ WaterCold  ===true? 
          <ColdWater/> : <Header/>
        }{
          Rol? 
          <Roll/> : <Header/>
        }
    </div>
  )
}

export  {Text}