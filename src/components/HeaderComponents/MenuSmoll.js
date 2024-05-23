import React from 'react'
import {  Link } from 'react-router-dom'
import '../Styles/ModalSmoll.css'
import { IMAGE } from '../../Assets'
import { useSelector } from 'react-redux'

const {BURGER}=IMAGE

const MenuSmoll = ({active,setActive,menu, setMenu,setModal,modal  }) => {

  const num = useSelector(state=>state.user.user)
  const stre = useSelector(state=>state.b.burger)
  return (
    <div className={active ? 'modalSmoll ActiveSmoll' : 'modalSmoll'} onClick={()=>setActive(false)} >
       <div className='ModalSmollContent' onClick={e=>e.stopPropagation()} >
       <div className='smoll' onClick={()=>setActive(false)} >
        <div className='MenuSmollIcon' >
          <div className='SmollImage' >
            <img className='ImageSmollMenu' src={BURGER} />
          </div>
        </div>
        <ul>
            <li><Link to='/' >Меню</Link></li>
            <li><Link to='/Item'>Новинки и акции</Link> </li>
            <li><Link to='/Contact'>Контакты</Link></li>
            <li><Link to='/About'>О Компании</Link></li>
            <li><Link to='k' >Корзина<span className='countSmoll' >{stre.length}</span></Link></li>
            {num.length >= 1 ?
          <div><li>
            Профиль
            </li></div>
          :
            <li  onClick={()=>setModal(true)}><Link>Вход и Регистрация</Link></li>
          }
          </ul> 
             </div>
       </div>
        </div>
  )
}

export  default MenuSmoll