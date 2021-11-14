import React, { Component } from "react"
import {connect} from 'react-redux'
import {cancelOrder, clearOrderItems, clearOrder, cancelOrderModal } from '../actions'

class OrderSection extends Component {
    componentDidMount(){
        console.log(this.props.history)
    }

    viewOrderItems(){
        this.props.clearOrderItems()
        this.props.history.push(`/view_order_items/${this.props.id}`)
    }

    paymentDetails() {
        this.props.clearOrder()
        this.props.history.push(`/payment_details/${this.props.id}`)
    }

    render() {
        return (
            <div class="orderSection">
                <div class="orderHeader">
                    <h3>Order {this.props.position}</h3>
                </div>

                <div class="orderSection-info">
                    <p>
                        Order Cost: ${(this.props.total/100).toFixed(2)}
                    </p>
                    <p>
                        Name of Driver: Bob Clark
                    </p>
                    <p>
                        Grocery Store: {this.props.store}
                    </p>
                </div>
                <div class="orderButtonBox">
                    <button onClick = {() => this.paymentDetails()} class="btn btn-success orderSectionDetails">
                        {this.props.paymentText}
                    </button>
                    <button onClick={() => this.viewOrderItems()} class="btn btn-primary orderSectionDetails">
                        {this.props.orderButtonTxt}
                    </button>
                    {this.props.orderButtonTxt === "Update Order" ?
                        <button onClick = {() => this.props.cancelOrderModal(this.props.id)} class= "btn btn-warning orderSectionDetails" data-toggle="modal" data-target="#Modal">
                            Cancel Order
                        </button>
                        :
                        null
                    }
                </div>

            </div>


        )
    }
}

export default connect(null, { cancelOrder, clearOrderItems, clearOrder, cancelOrderModal })(OrderSection)