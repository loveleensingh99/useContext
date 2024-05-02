import React from 'react'
import Item from './Item'
import Cart from "./Cart"

const products = [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 15 },
    { name: "Product D", price: 25 },
];

const Home = () => {
    return (
        <div style={{ display: 'flex',paddingRight:30}}>
            <div style={{ flex: 1 }}>
                {products.map((ele, index) => (
                    <Item key={index} itemDetails={ele} />
                ))}
            </div>
            <div style={{ flex: 1 }}>   
                <Cart />
            </div>
        </div>
    )
}

export default Home