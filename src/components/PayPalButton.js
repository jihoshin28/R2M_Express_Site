import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

class PaypalButton extends React.Component {
    render(){
        return(
            <PayPalButton
                amount = {`${this.props.amount}`}
                onSuccess = {(details, data) => {
                    window.history.pushState({}, '', '/payment/success')
                    window.history.go()
                }}
                catchError = {(err) => {
                    window.history.pushState({}, '', '/payment/failure')
                    window.history.go()
                }}
                options = {{
                    clientId: "A21AALEwYbmiEE-VVyHvCmQwmNxAvBYMrf68I1KVDgAN754OEbhEdW2i9DrAWZmU0vTFPFk6wifJhLT0IeouxD3tTBYZ9gnGg"
                }}
                
            ></PayPalButton>
        )
    }
}

export default PaypalButton