import React from 'react'
import { getProductsByCategory } from './myData'
import Prod from './Prod'
import { getSpecificDepProdsInCart} from cart
import cart from './Cart';

const dep = (catid) => {
    allDepProducts = getProductsByCategory(catid)
    return (
        <div>
          {allDepProducts.map(prod => (
            <Prod key={prod.id} {...prod} />
          ))}
        </div>
      );
    };
    depProductsInCart = getSpecificDepProdsInCart(catid)
    

export default dep