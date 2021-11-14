import React ,{useEffect}from 'react'
import {connect} from 'react-redux'
import {getOrder} from '../actions'
import {isEmpty} from 'lodash'

const PaymentDetails = props => {
    useEffect(() => {
        props.getOrder(props.match.params.order_id)
        console.log(props.match.params.order_id)
    }, [])

    let renderPaymentInfo = () =>{
        if(!isEmpty(props.orderInfo)){
            return (
                <div>
                    <h3>
                        Subtotal: ${(props.orderInfo.subtotal / 100).toFixed(2)}
                    </h3>
                    <h3>
                        Delivery: ${(props.orderInfo.payment / 100).toFixed(2)}
                    </h3>
                    <h3>
                        Tip: ${(props.orderInfo.tip / 100).toFixed(2)}
                    </h3>
                    <h3>
                        Total: ${(props.orderInfo.total / 100).toFixed(2)}
                    </h3>
                </div>
            )
        }
    }
    return (
        <div className = "App-margin">
            <h1>Payment Details</h1>
            <div>
                {renderPaymentInfo()}
            </div>
        </div>
    )
}

let mapStateToProps = state => {
    return({
        orderInfo: state.order.order_info.payment_info
    })
}

export default connect(mapStateToProps, {getOrder})(PaymentDetails)