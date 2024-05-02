import React, { useContext } from 'react'
import { CartContext, useCart } from "../context/cartContext"
const Cart = () => {



  const cart=useCart()
  const total = cart.item.reduce((a, b) => a + b.price, 0)
  return (
    <>
      <div>Cart</div>
      <h1>{cart && cart.item.map((ele, index) => (
        <div key={index}>
          <li>{ele.name}</li>
          <li>{ele.price}</li>
        </div>

      ))}</h1>

      <h5>Total Bill: ${total}</h5>
    </>
  )
}

export default Cart