import React, { Component } from 'react';
import Product from '../components/Product.js';
import Title from '../components/Title';
import {connect} from 'react-redux';

class ProductContainer extends Component {

products = () => {
    return this.props.products.map(product => <Product key={product.id} product={product} findProduct={this.props.findProduct} addToCart={this.props.addToCart} openModal={this.props.openModal}/>)
}
    render() {
        return (
            <div className="py-5">
               <div className="container"> 
               <Title name={"Patek Philippe"} title={"Grand Complications"} />
                    <div className="row">
                        {this.products()}
                    </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => ({ products })

const mapDispatchToProps = dispatch => ({
  findProduct: id => dispatch({ type: "FIND_PRODUCT", id}),
  addToCart: product => dispatch({ type: "ADD_TO_CART", product}),
  openModal: product => dispatch({ type: "OPEN_MODAL", product}),
  closeModal: () => dispatch({ type: "CLOSE_MODAL"})
})

export default connect (mapStateToProps, mapDispatchToProps)(ProductContainer);
