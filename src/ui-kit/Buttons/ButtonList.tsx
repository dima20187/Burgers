import React from 'react'
import { IButton } from '../types'
import '../../components/BurgerPage/components/styles/Burger.css'
export const ButtonList = ({onClick, name,children}:IButton) => {
return(
<div>
<button
onClick={onClick}
>
    {children}
</button>
</div>                
) 
}
