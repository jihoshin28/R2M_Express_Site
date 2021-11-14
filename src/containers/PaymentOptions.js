import React from 'react' 
import { connect } from 'react-redux'
import PaymentOption from '../components/PaymentOption'
import {addShopperNumber, addShopperAddress} from '../actions'

class PaymentOptions extends React.Component{
    componentDidMount(){
        console.log(this.props.currentShopper)
    }
    //All have titles above the divider
    componentDidUpdate(prevState){
        // if(this.prevState.currentShopperAddresses !== prevState.currentShopperAddresses){

        // }

        // if(this.prevState.currentShopperContacts !== prevState.currentShopperContacts){
            
        // }
    }    
    //Contact Information
    //Conditionally Add if no contacts
    //Select Button w/ Add Line or Phone Number Display underneath
    userNumbers = () => {
        return this.props.currentShopperContacts.map((number) => {
            return number
        })
    }

    //Delivery Address
    //Conditionally Add if no address
    //Select Button w/ Add Button or Address Display underneath 
    
    userAddresses = () => {
        return this.props.currentShopperAddresses.map((address) => {
            return address
        })
    }

    renderTip = () => {
        if(!this.props.chosenTip.value || this.props.chosenTip.value === "0"){
            return `No Tip`
        } else {
            return `$${(this.props.chosenTip.amount/100).toFixed(2)} (${this.props.chosenTip.value}%)`
        }
    }
    //Tip
    //Select Button w/ 0, 5, 10, 15, 'other' options underneath or tip amount display
    
    //Delivery Time
    //Select button w/ Today, and 4 days ahead options, and time select options undeneath or date/time display
    
    //Substitution Preference
    //Select button w/ Pick for me, Contact me, Refund options or option display

    //Delivery Instructions
    //Select button with text input box and submit button or italicized quoted note
    quote = (content) => {
        return(
            <div class = "quote">
                <p align = "left" style = {{ fontStyle: 'italic', fontSize: '1.5em'}}>"{content}"</p>
            </div>
        )
    }
    //Payment Method 
    //Buttons underneath for Stripe/Paypal Options 
    

    render(){
        return(
            <React.Fragment>
                <PaymentOption title = 'Phone Number' selectType = "Select" userNumbers = {this.userNumbers()} bottomContent = {this.props.chosenPhone? this.props.chosenPhone: "Please choose a contact"}/>
                <PaymentOption title = 'Address' selectType = "Select" userAddresses = {this.userAddresses()} bottomContent = {this.props.chosenAddress? this.props.chosenAddress: "Please select an address"}/>
                <PaymentOption title = 'Tip' selectType = "Select"  bottomContent = {this.renderTip()}/>
                <PaymentOption title = 'Delivery Time' selectType = "Select" bottomContent = {this.props.chosenDeliveryDay && this.props.chosenDeliveryTime ? `Deliver by ${this.props.chosenDeliveryDay}, ${this.props.chosenDeliveryDate} at ${this.props.chosenDeliveryTime}`: "Please select delivery time and date"}/>
                <PaymentOption title = 'Substitution Preference' selectType = "Select" bottomContent = {this.props.chosenSubstitute? this.quote(this.props.chosenSubstitute): "Add an optional substitute preference"}/>
                <PaymentOption title = 'Delivery Notes' selectType = "Edit" bottomContent = {this.props.chosenDeliveryNote? this.quote(this.props.chosenDeliveryNote): "Add an optional delivery note"}/>
                <PaymentOption title = 'Payment Method'/>
            </React.Fragment>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        currentShopper: state.auth.currentShopper,
        currentShopperAddresses: state.auth.addresses,
        currentShopperContacts: state.auth.numbers,
        chosenPhone: state.order.number,
        chosenAddress: state.order.address, 
        chosenTip: state.order.tip,
        chosenDeliveryDate:`${state.order.delivery_time.date.month}/${state.order.delivery_time.date.day}`,
        chosenDeliveryDay: state.order.delivery_time.day,
        chosenDeliveryTime: state.order.delivery_time.time, 
        chosenSubstitute: state.order.substitute.phrase,
        chosenDeliveryNote: state.order.note 
    })
}

export default connect(mapStateToProps, {addShopperNumber, addShopperAddress})(PaymentOptions)