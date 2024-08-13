import React from 'react'
import {Link, Outlet} from "react-router-dom";

const App = () => {
  return (
    <div>
      App
      <nav style={{borderBottom:"solid 1px", paddingBottom:"1rem"}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/music">Music</Link> |{" "}
        <Link to="/books">Books</Link> |{" "}
        <Link to="/shop">Shop</Link> |{" "}
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App