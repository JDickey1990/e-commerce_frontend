import React from 'react'
import CartItem from './CartItem'

export default function CartList({items}) {
    
    return (
        <div className="container-fluid">
            { items.map(item => <CartItem key={item.id} item={item}/>) }
        </div>
    )
}
