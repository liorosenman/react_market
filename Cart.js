import React, { useState } from 'react'

const cart = () => {
    const [cart, setCart] = useState([])

    const getSpecificDepProdsInCart = (catid) => {
        return cart.filter(prod => prod.catid == catid)
    }

  return (
    <div>cart</div>
  )
}

export default cart