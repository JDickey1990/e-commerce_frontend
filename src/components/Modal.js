import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'


class Modal extends Component {
    
    modal = () => {
        const {img, model, price} =this.props.modalProduct
        if(this.props.modalOpen){
        return <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal"
                                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>item added to the cart</h5>
                                <img src={img} className="img-fluid" alt="product"/>
                                <h5>{model}</h5>
                                <h5 className="text-muted">price : $ {price} </h5>
                                <Link to='/'>
                                    <ButtonContainer onClick={() => this.props.closeModal()}>
                                        Products
                                    </ButtonContainer>
                                </Link>
                                <Link to='/cart'>
                                    <ButtonContainer onClick={() => this.props.closeModal()} cart>
                                        Cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
        }else{
            return null;
        }
    }

    render() {
         const {img, model, price} =this.props.modalProduct
        return (
            <div>
                {this.modal()}
            </div>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}

`;

const mapStateToProps = ({modalOpen, modalProduct}) => ({modalOpen, modalProduct})

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({ type: "CLOSE_MODAL"})
})

export default connect (mapStateToProps, mapDispatchToProps)(Modal)
