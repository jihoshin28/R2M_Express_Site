import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { isEmpty } from 'lodash'
import {editShopper, editShopperProfile} from '../actions'

class EditShopper extends React.Component {
    componentDidMount(){
        console.log(this.props.match.params)
    }

    renderInput = ({input, meta, label}) => {
        return (
            <div>
                <label> {label}</label>
                <input {...input} /> 
                <div>{meta.error} </div>
            </div>
        )
    }

    toProfile = () => {
        this.props.history.replace('/profile')
    }

    submitForm = (formValues) => {
        if (!isEmpty(this.props.currentShopper) ) {
            let id = this.props.shopperId
            let infoId = this.props.infoId
            console.log(formValues)
            if(!!formValues.image){
                this.props.editShopper({ shopper: {image: formValues.image} }, id)
            } else if (!!formValues.email) {          
                this.props.editShopper({ shopper: { email: formValues.email} }, id)
            } else if (!!formValues.phone) {
                this.props.editShopperProfile({ shopper_info: {phone: formValues.phone} }, infoId)
            } else if (!!formValues.address) {
                this.props.editShopperProfile({ shopper_info: {address: formValues.address, city: formValues.city, state: formValues.state, zip_code: formValues.zip_code} }, infoId)
            }
            this.toProfile()
        }
    }

    renderForm(){
        let params = this.props.match.params.section
        if(!isEmpty(this.props.currentShopper) ){
            if(params === "address"){
                return (
                    <div>
                        <Field name = "address" component= {this.renderInput} label = "Address"></Field>
                        <Field name="city" component={this.renderInput} label="City"></Field>
                        <Field name="state" component={this.renderInput} label="State"></Field>
                        <Field name="zip_code" component={this.renderInput} label="Zip Code"></Field>
                    </div>
                )
    
            } else if (params === "phone"){
                return (
                    <Field name="phone" component={this.renderInput} label="Phone Number"></Field>
                )
            } else if (params === "email"){
                return (
                    <Field name="email" component={this.renderInput} label="Email"></Field>
                )
            } else if (params === "image"){
                return (                
                    <Field name="image" component={this.renderInput} label="Image URL"></Field>
                )
            }

        }
    }

    render(){
        return(
            <div>
                <h1>Edit Profile</h1>
                <form onSubmit = {this.props.handleSubmit(this.submitForm)}>
                    {this.renderForm()}
                    <button type = "submit">Submit</button>
                </form>

                <div>
                    <button onClick = {this.toProfile}>
                        Back To Profile
                    </button>
                </div>
            </div>
        )
    }
}

let validate = (formValues) => {
    let error = {}
    if (!formValues.address) {
        error.address = "Please enter an address!"
    }

    if (!formValues.city) {
        error.city = "Please enter a city!"
    }

    if (!formValues.state) {
        error.state = "Please enter a state!"
    }

    if (!formValues.zip_code) {
        error.zip_code = "Please enter a zip_code!"
    }
    
    if (!formValues.phone) {
        error.phone = "Please enter a phone number!"
    }

    if (!formValues.email) {
        error.email = "Please enter a email!"
    }

    if (!formValues.image) {
        error.image = "Please enter an image url!"
    }

    return error
}


const formWrapped = reduxForm({
    form: 'editShopperForm',
    validate: validate
})(EditShopper)

const mapStateToProps = state => {
    return ({
        currentShopper: state.auth.currentShopper,
        shopperId: state.auth.currentShopper.id,
        infoId: state.auth.currentShopper.shopper_info.id
    })
}

export default connect(mapStateToProps, {editShopper, editShopperProfile})(formWrapped)