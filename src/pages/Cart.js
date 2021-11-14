import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCart, removeCartItem, preOrder, updatePreOrder} from '../actions'
import CartItem from '../components/CartItem'
import { isEmpty } from 'lodash'
import {reduxForm, Field } from 'redux-form'

class Cart extends Component{

    cartItemsArray = (cartItems) => {
        let keys = Object.keys(cartItems)
        return keys.map(key => this.props.cart_items[key])
    }

    renderCart(){ 
        if (!isEmpty(this.props.cart_items)){
            let cartItems = this.cartItemsArray(this.props.cart_items)
            return (
                cartItems.map(cart_item => {
                    let item_attribute = cart_item.attributes.item
                    return <CartItem cartItemId={cart_item.id} image={item_attribute.image} name={item_attribute.name} count={cart_item.attributes.quantity_num} price={item_attribute.price} history = {this.props.history} item_id={item_attribute.id} unit = {item_attribute.quantity_unit}/>
                })
            )
        }
    }

    renderCartTotal(){
        let subtotal = 0
        if (!!isEmpty(this.props.cart_items)){
            subtotal = 0
        } else {
            let cartItems = this.cartItemsArray(this.props.cart_items)
            console.log(cartItems)
            subtotal = cartItems.reduce((sum, current) => {
                return sum + (current.attributes.quantity_num * (current.attributes.item.price * .01))
            }, 0)
        }
        let payment = subtotal * .35
        let tax = (subtotal + payment) * .0725
        let total = subtotal + payment + tax
        let submitForm = (formValues) => {
            console.log(this.props.currentOrderId)
            if(!!isEmpty(this.props.cart_items)){
                alert('Your cart is empty!')
            } else {
                let orderInfo = {
                    subtotal: subtotal,
                    payment: payment,
                    tax: tax,
                    total: total,
                    store_id: this.props.storeId,
                    shopper_id: this.props.shopperId,
                    status: 'pending'
                }
                if(!this.props.currentOrderId){
                    this.props.preOrder(orderInfo)
                }else {
                    this.props.updatePreOrder(this.props.currentOrderId, orderInfo)
                }              
                this.props.history.push('/payment/checkout')
            }
        }
    
        return (
        <div>
            <form onSubmit={this.props.handleSubmit(submitForm)}>
                <div>
                    <h4>
                        {`$${subtotal.toFixed(2)}`}
                    </h4>
                    <h4>
                        {`$${payment.toFixed(2)}`}
                    </h4>
                    <h4>
                        {`$${tax.toFixed(2)}`}
                        
                    </h4>
                    <h4>
                        {`$${total.toFixed(2)}`}
                    </h4>
                        
                        <button className = "btn btn-secondary" type="submit">
                            Checkout
                        </button>
                </div>
                
                
            </form>
        </div>
        )
    }

    render() {
        return(
            <div class = 'App-margin container'>
                <h1>Cart</h1>
                <div class =  'banner-div'>
                    {isEmpty(this.props.cart_items)?
                        <div class = 'banner-header'>
                            <h2> Your cart is empty. Pick out some items from the order page!</h2>
                        </div>
                        :
                        <div>
                            {this.renderCart()}
                            <div class = "row cartItem total roboFont">
                            
                                <div>
                                    <h4>
                                        SubTotal: 
                                    </h4>
                                    <h4>
                                        Delivery: 
                                    </h4>
                                    <h4>
                                        Tax:
                                    </h4>
                                    <h4>
                                        Total:
                                    </h4>
                                    <br></br>
                                </div>
                                {this.renderCartTotal()}
                            </div>
                        </div>
                    }
                    
                </div>    
                
            </div> 
        )
    }
}

let formWrapped = reduxForm({
    form: 'cartForm'
})(Cart)


const mapStateToProps = state => {
    return({
        shopperId: state.auth.currentShopper.id,
        storeId: state.stores.selectedStore.id,
        currentOrderId: state.order.current_order_id,
        cart_id: state.cart.cart_id,
        cart_items: state.cart.cart_items,
        item_ids: state.cart.item_ids
    })
}

export default connect(mapStateToProps, {getCart, removeCartItem, preOrder, updatePreOrder})(formWrapped)