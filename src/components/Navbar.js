import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.svg"
import  {ButtonContainer} from './Button'
import {getOrders} from './Actions/getOrders'
import {connect} from 'react-redux'


 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm  px-sm-5 bg-secondary navbar-dark">
                {/*https://www.iconfinder.com/icons/1243706/shop_store_market_icon*/}

                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/watches" className="nav-link"> WATCHES </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/orders" className="nav-link" onClick={() => this.props.getOrders()}> YOUR ORDERS </Link>
                    </li>
                </ul>

                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2 ">
                            <i className="fas fa-cart-plus" />
                        </span>
                         my cart
                    </ButtonContainer>
                </Link>

            </nav>
        )
    }
}


export default connect(null, {getOrders})(Navbar)
