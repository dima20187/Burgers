import React, { FC } from 'react'
import '../../styles/Categories.css'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Items } from './components/items/Categories'
import { Categories } from './components/Categories'



export const BurgerPage= () => {
  const stre = useSelector((state: RootState)=>state.b.burger)
  console.log(stre)
  const dispatch = useDispatch()
  
  return (
    <div className='burger_container' >
      <div className='burger' >
        <div className='burger_page' >
        {Items.map(item=>(
            <Categories item={item} key={item.id} />
        ))}
        </div>
      </div>
    </div>
  )
}


