import React from 'react'
import { getProductsByCategory } from './myData'
import Prod from './Prod'
import Cart from './Cart';
import { useParams } from 'react-router-dom';

const Dep = () => {
    const { depid } = useParams();
    console.log(depid);
    const allDepProducts = getProductsByCategory(depid)
    return (
        <div>
          {allDepProducts.map(prod => (
            <Prod key={prod.id} name={prod.name} price={prod.price} />
          ))}
          <hr></hr>
        <Cart></Cart>
        </div>
        
      );
    };
    // depProductsInCart = getSpecificDepProdsInCart(depid)
    

export default Dep