import React, { useState } from 'react'
import { useEffect } from 'react'
    const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        let temp = JSON.parse(localStorage.getItem("cart"))
        if (temp !== null) {
            setCart(temp)
        }
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart]) 

    const changeCart = (prodid, delta) => {   
        let tempProduct = cart.filter(item => item.id == prodid)[0]
        if (tempProduct){
            tempProduct.amount += delta
            if (delta == -1){
                if (tempProduct.amount == 0){
                    setCart([...cart.filter(item => item.id != prodid)])
                }
            }
        }else{
            console.log("New product");
            tempProduct.amount = 1
            setCart([...cart, tempProduct])
        }
    }

    const totalSumForProd = () => {
        return 5;
    }

  return (
    <div>CART
        <table>
            <tr>
                <td>name</td>
                <td>price</td>
                <td>amount</td>
                <td>Total</td>
            </tr>
            {cart.map(prod => 
                <tr key={prod.id}>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.amount}</td>
                    <td>{totalSumForProd()}</td>
                    <td>-</td>
                    <td>+</td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default Cart