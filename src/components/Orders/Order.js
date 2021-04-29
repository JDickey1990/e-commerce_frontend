import React from 'react'
import OrderProduct from './OrderProduct'
import OrderTotal from './OrderTotal'

export default function Order(props) {

  const  products = () => {
    return props.order.products.map(product => <OrderProduct  product={product} key={Math.random()}/>)
   } 
    
   
    return (
        <div>
            <h2>Order#{props.order.id}</h2>
            {products()}
            <OrderTotal order={props.order}/>
        </div>
    )
}
