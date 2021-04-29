import React from 'react'

export default function OrderTotal(props) {
const{tax, total, subtotal} =props.order

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <h5>
                        <span className="text-title"> subtotal: </span>
                        <strong>$ {subtotal} </strong>
                    </h5>

                    <h5>
                        <span className="text-title"> tax: </span>
                        <strong>$ {tax} </strong>
                    </h5>

                    <h5>
                        <span className="text-title"> total: </span>
                        <strong>$ {total} </strong>
                    </h5>
                </div>
            </div>
        </div>
    )
}
