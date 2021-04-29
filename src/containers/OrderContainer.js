import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from '../components/Orders/Order'
import Title from '../components/Title'
import EmptyOrder from '../components/Orders/EmptyOrder'

class OrderContainer extends Component {
    orders = () => {
        if(this.props.orders.length > 0){
            return <div>
                    <Title name="your" title="orders" />
                    {this.props.orders.map(order => <Order  order={order} key={Math.random()}/>)}
                </div> 
            }else{
               return <div>
                        <EmptyOrder/>
                     </div>
        }
    }

    render() {
        return (
            <div>
                {this.orders()}
            </div>
        )
    }
}

const mapStateToProps = ({orders}) => ({orders})

export default connect(mapStateToProps)(OrderContainer)