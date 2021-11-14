import React from 'react'
import { connect } from 'react-redux'
import OrderItem from '../components/OrderItem'
import {getOrderItems} from '../actions'


class ViewOrderItems extends React.Component{

    componentDidMount(){
        console.log(this.props.orderItems)
        console.log(this.props.order)
        this.props.getOrderItems(this.props.match.params.order_id)
    }

    renderItems(){   
        return this.props.orderItems.map(item => {
            let attributes = item.attributes
            return (
                <OrderItem history = {this.props.history} price={attributes.item.price} image={attributes.item.image} count={attributes.quantity_num} units={attributes.item.quantity_unit} name={attributes.item.name} item_id = {attributes.item.id}/>
            )
        })
    }
    render(){
        return(
            <div className = "App-margin">
                <h1>Order Items</h1>
                {this.renderItems()}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return({
        orderItems: state.order.order_items,
        order: state.order
    })
}

export default connect(mapStateToProps, {getOrderItems})(ViewOrderItems)