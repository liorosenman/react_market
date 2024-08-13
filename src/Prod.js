import React from 'react'

const Prod = (prod) => {
  return (
    <div>
        <button>+</button>
        <button>-</button>
        <h3>{prod.name}, {prod.price}, {}</h3>
    </div>
  )
}

export default Prod