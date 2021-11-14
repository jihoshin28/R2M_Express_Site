import React from 'react' 
import { connect } from 'react-redux'
import {selectOrderPayment} from '../../actions'
import CheckoutRowButton from '../buttons/CheckoutRowButton'

class CheckoutPayment extends React.Component {


    render(){
        return(
            <div className = "ui container">
                <h4>
                    Select a Payment Option (Paypal and Stripe methods are links. Please use test to create orders.):
                </h4>
                <div className = "button-options-row">
                    <CheckoutRowButton selectOption = {this.props.selectOrderPayment} value = "stripe"/>
                    <CheckoutRowButton selectOption = {this.props.selectOrderPayment} value = "paypal"/>
                    <CheckoutRowButton selectOption = {this.props.selectOrderPayment} value = "test"/>
                </div>
            </div>
        )
    }
}

export default connect(null, {selectOrderPayment})(CheckoutPayment)
