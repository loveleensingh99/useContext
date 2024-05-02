import React, { useContext } from 'react'
import "./item.css";
import { useCart} from "../context/cartContext";

const Item = ({ itemDetails }) => {

    const { name, price, key } = itemDetails
    const cart = useCart();
    return (
        <div className="item-container" key={key}>
            <h4 className="item-name">Item Name:{name}</h4>
            <p className="item-price">Price: {price}</p>
            <button className="add-to-cart-btn" onClick={() => cart.setItem([...cart.item, { name:name, price:price }])}>Add to Cart</button>
        </div>
    )
}

export default Item