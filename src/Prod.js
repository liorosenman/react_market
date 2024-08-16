import React from 'react'
import Cart from './Cart';
import changeCart from './Cart'

const Prod = ({id, name, price}) => {
  return (
    <div>    
        <h3>{name}, {price}</h3><button onClick = {() => changeCart(id, 1)}>ADD</button>       
    </div>
  )
}

export default Prod