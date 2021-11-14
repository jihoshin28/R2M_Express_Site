import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeButton extends React.Component {
    componentDidMount(){
        console.log(this.props.userEmail, this.props.amount)
    }

    onToken = (token) => {
        console.log(token)
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(data)
            })
        })
    }
    
    render(){
        return( 
            <StripeCheckout
                token = {this.onToken}
                description = "Bread Basket Order Payment"
                amount = {this.props.amount}
                currency = "USD"
                email ={this.props.userEmail}
                stripeKey= "pk_test_51HN5XFKYkELgOBXmFpEJqnw7WynOS5irzHdnuse7CMysCArWYZPwclIdO73m8Ot8CVNn6pQANPfuPkbDmLk3HRdD00ss20lGUO"
                >

            </StripeCheckout>
        )
    }
}

export default StripeButton