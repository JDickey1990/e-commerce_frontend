import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {ButtonContainer}  from './Button'


class Details extends Component {

    handleOnClick = () => {
        this.props.addToCart(this.props.product)
        this.props.openModal(this.props.product)
    }

    render() {
        const {model, img, price, company, collection, info, inCart, count, total} = this.props.product;
        return (
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-grey my-5">
                        <h1>{collection} Collection</h1>
                    </div>
                </div>
                {/* title */}

                {/* product image */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid detail-img-top" alt="product" />
                    </div>
                {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>Made by : <span className="text-uppercase">{company}</span> </h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            <strong>
                                Model : {model}
                            </strong>
                           
                        </h4>
                        <h4 className="text-title text-uppercase text-muted">
                            Price: {price} <span>USD</span>
                        </h4>
                        <div className="font-weight-bold mt-3 mb-4">
                            Details about this product:
                            <p className="text-muted lead">
                                {info}
                            </p>
                        </div>
                      {/* buttons */}   
                        <div>
                            <Link to="/">
                                <ButtonContainer>
                                    Return to Products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer 
                                cart 
                                disabled={inCart ? true : false}
                                onClick={() => this.handleOnClick()}
                            >
                                {inCart ? "In Cart" : "Add to Cart"}
                            </ButtonContainer>
                        </div> 
                    </div>      
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ product }) => ({ product })

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch({ type: "ADD_TO_CART", product}),
    openModal: product => dispatch({ type: "OPEN_MODAL", product}),
    closeModal: () => dispatch({ type: "CLOSE_MODAL"})
  })

export default connect(mapStateToProps, mapDispatchToProps)(Details)