import React, { Component } from 'react'
import ProductList from '../components/ProductList'

export default class storefront extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Store Front</h3>
               <ProductList />
               
            </div>
        )
    }
}
