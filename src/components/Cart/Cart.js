import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotals from './CartTotals'
import EmptyCart from './EmptyCart'
import { connect } from 'react-redux'


class Cart extends Component {

    cart = () => {
        if(this.props.shoppingCart.length > 0){
            return <div>
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList items={this.props.shoppingCart}/>
                    <CartTotals />
                </div> 
            }else{
               return <div>
                        <EmptyCart/>
                     </div>
        }
    }
    
    render() {
        return (
          <section>
              {this.cart()}
          </section>
        )
    }
}

const mapStateToProps = ({shoppingCart}) => ({shoppingCart})

export default connect(mapStateToProps)(Cart)
