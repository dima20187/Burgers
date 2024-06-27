import React from 'react'
import { IButton } from '../types'
import '../../components/BurgerPage/components/styles/Burger.css'
export const Button = ({onClick, name,children}:IButton) => {
return(
<div className='button_price' >
<button
onClick={onClick}
>
    {children}
</button>
</div>                
) 
}
