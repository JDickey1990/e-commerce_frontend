import React from 'react'

export default function OrderProduct(props) {
    const{ model, img, price, company, collection }= props.product;
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
                <span> {company}-{collection} </span>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"></span> model # {model}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"></span> price : {price}
            </div>
            
        </div>
    )
}
