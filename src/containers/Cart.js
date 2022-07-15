import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const cart = useSelector(state => state.AddToCart.carts);
  return (
    <div>
        <h2>Cart Page</h2>
        <h5>Cart Products: {cart.length}</h5>
        {cart && cart.map(item => (
            <div className='cart' key={item.id}>
                <div className="my-3 cart-items">
                    <div className="div-image">
                        <img className='cart-image' src={item.image} alt={item.title} />
                    </div>
                    <div className='d-flex cart-content'>
                        <h4 className='cart-title'>{item.title}</h4>
                        <h4 className='cart-price'>$ { item.price}</h4> 
                        <span>⭐⭐⭐⭐⭐ {item.rating.rate}</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <NavLink className='btn btn-dark btn-sm p-2 my-2' to={`/product/${item.id}`}>View Details</NavLink>
                        <button className='btn btn-sm btn-dark p-2'>Remove from cart</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
