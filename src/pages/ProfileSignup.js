import React from 'react'
import { connect } from 'react-redux'
import { Profile } from './Profile'
import { reduxForm, Field } from 'redux-form'
import { createShopperProfile } from '../actions'

class ProfileSignup extends React.Component {
    renderInput = ({ input, meta, label }) => {
        console.log(input)
        return (
            <div class="input-group">
                <label>{label}</label>
                <input {...input} />
                <div> {meta.error}</div>
            </div>
        )
    }

    profileSubmit = (formValues) => {
        let form = {shopper_info : {...formValues, age: parseInt(formValues.age), shopper_id: this.props.shopperId}}
        this.props.createShopperProfile(form)
        this.props.history.push('/orderpage')
    }

    capitalize(word) {
        if(!!word){
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }

    render(){
        return(
            <div> 
                <h1> 
                    Welcome {this.capitalize(this.props.shopperFirstName)}
                </h1>
                <form onSubmit = {this.props.handleSubmit(this.profileSubmit)}>
                    <Field name = "age" component = {this.renderInput} label = "Age"/>
                    <Field name = "address" component = {this.renderInput} label = "Address" />
                    <Field name = "city" component = {this.renderInput} label = "City" />
                    <Field name = "state" component = {this.renderInput} label = "State" />
                    <Field name = "zip_code" component = {this.renderInput} label = "Zip Code" />
                    <Field name = "phone" component = {this.renderInput} label = "Phone" />
                    <button type="submit" id="button-addon1">Submit</button>
                </form>
            </div>
        )
    }
}

//age address city state zipcode phone

let validate = (formValues) => {
    let error = {}

    if (!formValues.age) {
        error.age = "Please enter an Item"
    }
    if (!formValues.address) {
        error.address = "Please enter an Item"
    }
    if (!formValues.city) {
        error.city = "Please enter an Item"
    }
    if (!formValues.state) {
        error.state = "Please enter an Item"
    }
    if (!formValues.zip_code) {
        error.zip_code = "Please enter an Item"
    }
    if (!formValues.phone) {
        error.phone = "Please enter an Item"
    }
    
    return error
}

let mapStateToProps = state => {
    return({
        shopperFirstName: state.auth.currentShopper.first_name,
        shopperId: state.auth.currentShopper.id
    })
}

let formWrapped = reduxForm({
    form: 'profileForm',
    validate: validate
})(ProfileSignup)

export default connect(mapStateToProps, {createShopperProfile})(formWrapped)