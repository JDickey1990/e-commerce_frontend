import React from 'react'
import {connect} from 'react-redux'

function CartItem({item, increment, decrement, removeItem}) {
    const{ id, model, img, price, total, count}= item;

    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    style={{ width:'5rem', height:'5rem' }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> model # </span>{model}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price : </span>{price}
            </div>
            <div className="col-10-mx mx-auto col-lg-2 my-2 my-lg-0">
                <div className='d-flex justify-content-center'>
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                        -
                    </span>
                        <span className="btn btn-black mx-1">{count}</span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                        +
                    </span>
                </div>
            </div>
            {/* */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(item)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $  {total} </strong>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    increment: id => dispatch({ type: "INCREMENT", id}),
    decrement: id => dispatch({ type: "DECREMENT", id}),
    removeItem: product => dispatch({ type: "REMOVE_ITEM", product}),
    
})

export default connect(null, mapDispatchToProps)(CartItem)
