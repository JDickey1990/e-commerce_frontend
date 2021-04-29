import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addOrder} from '../Actions/addOrder'
import {addTotals} from '../Actions/addTotals'
import {emptyCart} from '../Actions/emptyCart'
import {setProducts} from '../Actions/setProducts'

 function CartTotals({cartSubTotal, cartTax, cartTotal, emptyCart, addTotals, shoppingCart, addOrder, setProducts}) {

    const totals = () => {
        addTotals(shoppingCart)
    }

    const handleOnClick = () => {
        emptyCart();
        setProducts();
    }

    const handlePurchase = () => {
        let data = {order:{
            subtotal: cartSubTotal,
            tax: cartTax,
            total: cartTotal},
            products_attributes: shoppingCart
        }
        addOrder(data);
        emptyCart();
        setProducts();
    }
 


    return (
        <div className="container">
            {totals()}
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <Link to="/" >
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                            type="button"
                            onClick={() => handleOnClick()}
                        >clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title"> subtotal: </span>
                        <strong>$ {cartSubTotal} </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> tax: </span>
                        <strong>$ {cartTax} </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> total: </span>
                        <strong>$ {cartTotal} </strong>
                    </h5>
                    <Link to='/orders'>
                        <button className="btn btn-outline-success text-uppercase mb-3 px-5" 
                                type="button"
                                onClick={() => handlePurchase()}
                            >purchase
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps =({cartSubTotal, cartTax, cartTotal, shoppingCart}) => ({cartSubTotal, cartTax, cartTotal, shoppingCart})

// const mapDispatchToProps = dispatch =>({
//     emptyCart: () => dispatch ({type: 'EMPTY_CART'}),
//     addTotals: shoppingCart => dispatch ({ type: "ADD_TOTALS", shoppingCart}),
//     setProducts: () => dispatch({ type: "SET_PRODUCTS"})
// })

export default connect (mapStateToProps,{addOrder, addTotals, emptyCart, setProducts} )(CartTotals)
