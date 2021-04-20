import React, { Component } from 'react';
import Product from '../components/Product.js';
import Title from '../components/Title';
import {connect} from 'react-redux';

class ProductContainer extends Component {

products = () => {
    return this.props.products.map(product => <Product key={product.id} product={product} findProduct={this.props.findProduct}/>)
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
  findProduct: id => dispatch({ type: "FIND_PRODUCT", id})
})

export default connect (mapStateToProps, mapDispatchToProps)(ProductContainer);
