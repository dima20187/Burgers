import React, { useState } from 'react'
import { decrementNumber } from '../redux/CouterSlice'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import '../Styles/Header.css'
import { IMAGE } from '../../Assets'
import Modal from './Modal'
import MenuSmoll from './MenuSmoll'


const {BURGER,CONTACT, MENU,
  MANU ,PENCIL, EXIT,
   BUY,USERICON,}=IMAGE



const Header = () => {

const dispatch = useDispatch()
const stre = useSelector(state=>state.b.burger)
const num = useSelector(state=>state.user.user)
const [modalActive,setModal]=useState(false)
const [menuActive, setMenuActive]=useState(false)

const [verticali,setVerticali]=useState(false)

const [menu,setMenu]=useState(false)




  return (
    
    <div className='container' >
          <div className= 'item'>
            <div className='item_container' >

              
            <div className='item_ul' >
              
           
            <div className='menu_item' >
              <img className='menu' src={MENU} onClick={()=>setMenuActive(true)}/>
            </div>
            <div className='href'>
              <p className='Exit_buy'>В ресторане <img src={PENCIL} /></p>

            </div>
            <div className='number' >
              7766<br/>
              <span>Звонок по телефону</span>
            </div>
           
            </div>
            <div className='image_icon'>
            <img src={BURGER} />
            </div>


            <div className='item_2' >
           
            
            <div className='href_2'>
              <Link to='/' >Меню</Link>
            </div>
            {/* <div className='href_2' >
              <Link>Купоны</Link>
            </div> */}
           <div className='href_2' >
              <Link to='About'>О нас</Link>
            </div>
            <div className='Exit_2' onClick={()=>setModal(true)} >
            {num.length >= 1 ?
            <div/>
          :
          <p className='Exit_buy'> <img src={EXIT} className='Exit'/>
            Войти</p>
          }
            
            </div>
            {num.length <1? 
            <div className='nonUser' ></div>
            :
            <div className='user' >
              <img src={USERICON} />
              
              <div className='no' >{num.map(({number})=>(
              <div className='Profil' >
                <h1>Профиль</h1>
                <p className='ProfilNumber' >Ваш номер: {number}</p>
                </div>))}
              <div>
                <p className='ProfilExit' onClick={()=>dispatch(decrementNumber({id:2}))} >Выход</p>
              </div>
              </div>
            </div>
            }
            
            <div className='buy' >
             <Link to='k' ><img src={BUY} /> <span className='korzina_count' >{stre.length}</span> </Link> 
            </div>
           

            </div>
            </div>
      </div> 
     
      <div >
            <Modal active={modalActive} setActive={setModal} />
           
        </div>
         <div>
           <MenuSmoll active={menuActive} setActive={setMenuActive} menu={menu} setMenu={setMenu} modal={modalActive} setModal={setModal}/>
           
        </div>
      
    </div>
  )
}

export  {Header}