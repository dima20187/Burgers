import React, { Dispatch, FC, SetStateAction } from 'react'
import {  Link } from 'react-router-dom'
import '../../styles/MenuSmoll.css'
import { IMAGE } from '../../Assets/icons'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const {BURGER}=IMAGE

type ISmollModal={
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>
  setModal: Dispatch<SetStateAction<boolean>>

}

const MenuSmoll = ({active,setActive,setModal}:ISmollModal) => {

  const num = useSelector((state:RootState)=>state.user.user)
  const stre = useSelector((state:RootState)=>state.b.burger)
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
            <li  onClick={()=>setModal(true)}><Link to=''>Вход и Регистрация</Link></li>
          }
          </ul> 
             </div>
       </div>
        </div>
  )
}

export  default MenuSmoll