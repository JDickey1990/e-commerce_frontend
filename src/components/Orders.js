import React, { Component } from 'react'
import { connect } from 'react-redux'

class Orders extends Component {
    render() {
        return (
            <div>
                hi from orders
            </div>
        )
    }
}

const mapStateToProps = ({orders}) => ({orders})
export default connect(mapStateToProps)(Orders)
