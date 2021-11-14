import React from 'react'
import {connect} from 'react-redux'
import {loadStripe} from '@stripe/stripe-js'
import PayPalButton from '../components/PayPalButton'
import PaymentOptions from '../containers/PaymentOptions'
import { processOrder, stripePayment, checkoutOrder, dropCart } from '../actions'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY)

class Payment extends React.Component {
    
    componentDidMount(){
        console.log(this.props.orderTax, this.props.orderTotal, this.props.orderSubTotal, this.props.orderPayment)
        let currentURL = window.location.href.split('/')
        let successParam = currentURL[currentURL.length - 1]
        console.log(currentURL.length) 
        if(successParam === "success"){
            console.log('hello')
            this.placeOrder()
        } else if(successParam === "failure") {
            alert("Payment was unsuccessful!")
            this.setState({error: true})
        }
    }

    constructor() {
        super()
        this.state = {
            error: false,
            loading: false
        }
    }

    cartItems(){
        let keys = Object.keys(this.props.cartItems)
        return keys.map(key => this.props.cartItems[key])
    }

    placeOrder = async() => {
        //:order_id, :item_id, :quantity_num, :status
        this.setState({
            loading: true
        })
        await this.processOrder()
        this.props.history.push('/orderpage')
        this.props.history.go()
        
    }

    processOrder = async () => {
        this.props.dropCart(this.props.cart_id)
        let cartItems = this.cartItems()
        await this.props.processOrder(cartItems, this.props.cart_id, this.props.currentOrderId, 
            { 
                status: "active",
                address: this.props.orderAddress,
                delivery_time: this.props.orderDeliveryTime,
                delivery_date: `${this.props.orderDeliveryDate.month + '/' + this.props.orderDeliveryDate.day}`,
                note: this.props.orderNote,
                phone: this.props.orderNumber,
                substitute: this.props.orderSubstitute,
                total: this.props.orderTotal + this.props.orderTip ,
                tip: this.props.orderTip
            }
        )
        this.props.checkoutOrder()
    }

    stripeCheckout = async(e) => {
        let checkoutItems = this.cartItems()
        let result = checkoutItems.map((checkoutItem) => {
            let item = checkoutItem.attributes.item
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price,
                    },
                    quantity: checkoutItem.attributes.quantity_num,
                }
            })
        console.log(result)
        console.log(result)
        await this.props.stripePayment(e, stripePromise, result)
        this.placeOrder()
    }

    onPaymentChange = (e) => {
        this.setState({
            paymentOption: e.target.value
        })
    }

    // [
    //     {
    //         price_data: {
    //             currency: 'usd',
    //             product_data: {
    //                 name: 'Bible',
    //             },
    //             unit_amount: 3000,
    //         },
    //         quantity: 1,
    //     },
    //     {
    //         price_data: {
    //             currency: 'usd',
    //             product_data: {
    //                 name: 'Bible',
    //             },
    //             unit_amount: 3000,
    //         },
    //         quantity: 1,
    //     }
    // ]

    renderItems(){
        let keys = Object.keys(this.props.cartItems)
        let cartItems = keys.map(key => this.props.cartItems[key])
        console.log(cartItems)
        return cartItems.map(item => {
            return <div class = "row checkout-item">
                        <div class = "card col-3" style = {{height: "100%", width: "20%"}}>
                            <img src={item.attributes.item.image} style={{ height: "100%" }} class="card-img-top" alt="..." />
                        </div>
                    <h3 class = "col-2">{item.attributes.item.name}</h3>
                    <h3 class = "col-2">
                        {item.attributes.quantity_num}
                    </h3>
                    <h3>{`$${(item.attributes.item.price * .01 * item.attributes.quantity_num).toFixed(2)}`}</h3>
                </div>
            
        }) 
    }

    render(){
        return(
            
                <div >
                    {!this.state.loading ? 
                    <div class="wrapper"> 
                            <div className = "payment-box">
                                <div class= "payment-options">
                                    <h1 class = "payment-header">Checkout</h1>
                                    <PaymentOptions />
                                </div>
                            
                                <div class="payment-total">
                                    <div class = "payment-details">
                                        <div style = {{backgroundColor: 'white', margin: '1%', padding: '10%', borderRadius: "10px"}}>
                                            <div className = "row payment-cost-line">
                                                <div>
                                                    <h4>SubTotal</h4>
                                                </div>
                                                <div>
                                                    <h4>{`$${this.props.orderSubTotal.toFixed(2) }`}</h4>
                                                </div>
                                            </div>
                                            <div className = "row payment-cost-line">
                                                <div>
                                                    <h4>Delivery</h4>
                                                </div>    
                                                <div>
                                                    <h4>{`$${this.props.orderPayment.toFixed(2) }`}</h4>
                                                </div>    
                                            </div>
                                            <div className = "row payment-cost-line">
                                                <div>
                                                    <h4>Tax</h4>
                                                </div>
                                                <div>
                                                    <h4>{`$${this.props.orderTax.toFixed(2) }`}</h4>
                                                </div>
                                            </div>
                                            <div className = "row payment-cost-line">
                                                <div>
                                                    <h4>Tip</h4>
                                                </div>    
                                                <div>
                                                    {
                                                        <h4>{`$${this.props.orderTip.toFixed(2) }`}</h4>   
                                                    }
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="payment-divider"></div>
                                        <div style = {{backgroundColor: 'white', margin: '1%', padding: '10%', borderRadius: "10px"}}>
                                            <div className = "row payment-cost-total">
                                                <div>
                                                    <h4>Total</h4> 
                                                </div>
                                                <div>
                                                    <h4>{`$${
                                                        (this.props.orderPayment + this.props.orderSubTotal + this.props.orderTip + this.props.orderTax).toFixed(2) }`
                                                        }
                                                    </h4>
                                                </div>
                                            </div>
                                            <div style = {{marginTop: '10%'}}>
                                                {
                                                    this.props.paymentMethod === "test" ?
                                                    <div style = {{borderRadius: "3px", webkitBoxShadow: "0px 0 5px rgba(99, 99, 99, 0.842)"}} className = "button-div">
                                                        <button className = 'btn btn-success' onClick = {this.placeOrder} style = {{width: "100%"}} form = "contactForm" value = {this.props.value}>
                                                            <div className = "checkout-option-payment">    
                                                                <h4>Test Checkout</h4>
                                                            </div>
                                                        </button> 
                                                    </div>
                                                    :
                                                    <div></div>
                                                }
                                                {
                                                    this.props.paymentMethod === "paypal" ? 
                                                    <PayPalButton placeOrder = {this.placeOrder} amount = {(this.props.orderTotal*.01).toFixed(2)}></PayPalButton>
                                                    :
                                                    <div></div>
                                                }
                                                {
                                                    
                                                    this.props.paymentMethod === "stripe" ? 
                                                    <div style = {{borderRadius: "3px", webkitBoxShadow: "0px 0 5px rgba(99, 99, 99, 0.842)"}} className = "button-div">
                                                        <button onClick = {this.stripeCheckout} className = "btn btn-primary" style = {{width: "100%"}} form = "contactForm" >
                                                            <div className = "checkout-option-div">
                                                                <div>
                                                                    <img style = {{marginTop: "2px", marginRight: "2px"}} className = {"checkout-option-img"} src = {`${process.env.PUBLIC_URL}/stripeIcon.png`} />
                                                                </div>
                                                            </div>
                                                        </button> 
                                                    </div>
                                                    :
                                                    <div></div>
                                                }
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="payment-bg-1">
                                
                            </div>
                        </div>
                        :
                        <div className = "container">
                            <div className = "row" style = {{marginTop: '40%', justifyContent: 'center'}}>
                                <div className = "loaderDiv">
                                    <div class = "loader"></div>
                                    <h1>Processing Order</h1>
                                </div>
                            </div>
                        </div>
                    }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return({
        userEmail: state.auth.currentShopper.email,
        cart_id: state.cart.cart_id,
        currentOrderId: state.order.current_order_id,
        cartItems: state.cart.cart_items,
        orderPayment: state.order.payment,
        orderTip: state.order.tip.amount,
        orderTax: state.order.tax,
        orderTotal: state.order.total, 
        orderSubTotal: state.order.subtotal,
        paymentMethod: state.order.payment_method,
        orderAddress: state.order.address,
        orderDeliveryTime: state.order.delivery_time.time,
        orderDeliveryDate: state.order.delivery_time.date,
        orderNote: state.order.note,
        orderNumber: state.order.number,
        orderSubstitute: state.order.substitute.value
    })
}


export default connect(mapStateToProps, {processOrder, stripePayment, checkoutOrder, dropCart })(Payment)