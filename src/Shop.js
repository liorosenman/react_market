import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Shop = () => {
  return (
    <div>Shop|{" "}
      <Link to = "/shop">Start</Link> |{" "}
      <Link to = "/shop/1">fruits</Link> |{" "}
      <Link to = "/shop/2">snacks</Link> |{" "}
      <Link to = "/shop/3">drinks</Link> |{" "}
      <Link to = "/shop/cart">Cart</Link> |{" "}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Shop