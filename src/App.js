import React from 'react'
import './components/Styles/App.css'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import  {Categories}  from './components/HeaderComponents/Categories';
import { AboutUs } from './components/HeaderComponents/AboutUs';
import { NewItem } from './components/HeaderComponents/NewItem';
import { Contact } from './components/HeaderComponents/Contact';
import { Footer } from './components/HeaderComponents/Footer';
import { Roll } from './components/HeaderComponents/Roll';
import { ChikenBurger } from './components/HeaderComponents/ChikenBurger';
import { KomboKing } from './components/HeaderComponents/KomboKing';
import { ColdWater } from './components/HeaderComponents/ColdWater';
import { Menu } from './components/HeaderComponents/Menu';
import {Main} from  './components/HeaderComponents/Main'
import { Header } from './components/HeaderComponents/Header';
import Navigate from './components/navigate/Navigate';
const App = () => {
  return (
    <div className='App'>
     <div className='appa' >
        <div className='header'>
        <Header/>
       </div> 
       <div className='content' >
        <Navigate/>
        </div> 
          <div className='footerr' >
         <Footer/> 
      </div>
      </div>
    </div>
  )
}


export default App
