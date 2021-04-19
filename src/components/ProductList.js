import React, { Component } from 'react'
import Product from './Product.js'
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Product List</h3>
                <Product />
            </div>
        )
    }
}
