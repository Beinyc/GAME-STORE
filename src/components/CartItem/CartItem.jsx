import React from 'react'
import './CartItem.css'

export default function CartItem({
    title,
    price,
    id
}) {
  return (
    <div className='cart-item'>
        <span>{ title }</span>
        <div className="cart-item__price">
            <span>{price} руб.</span>
        </div>
    </div>
  )
}
