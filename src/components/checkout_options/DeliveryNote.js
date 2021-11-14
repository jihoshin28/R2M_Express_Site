import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import {updateDeliveryNote} from '../../actions'

class DeliveryNote extends React.Component {
    componentDidMount(){
        console.log(this.props.showBottomToggle)
    }
    renderTextArea = ({ input, meta, label }) => {
        return (
            <div class="form-group modal-form">
            <label style = {{left: '0'}}>{label}</label>
            <textarea class="form-control" rows="3" {...input} placeholder = "F.e. Please leave the groceries on my front porch... "></textarea>
            <div>{meta.error}</div>
        </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        return new Promise((resolve, reject) => {
            const errors = validate(formValues)
            if(errors.empty){
                reject(new SubmissionError(errors))
            } else {
                resolve(formValues)
            }
        }).then((formValues) => {
            this.props.updateDeliveryNote(formValues.delivery_note)
            this.props.showBottomToggle()
        })
    }

    render(){
        return(
            <div class = "payment-option-bottom">
                <form onSubmit = {this.props.handleSubmit(this.onSubmit)} id = 'delivery-note'>
                    <Field name = "delivery_note" component = {this.renderTextArea} label = "Add a note for your order"/>
                </form>
                <button style = {{float: 'left'}} type = 'submit' class = 'btn btn-primary' form = 'delivery-note'>Submit</button>
            </div>
        )
    }
}

let validate = (formValues) => {
    let error = {}

    if(!formValues.delivery_note){
        error.delivery_note = "Your note is empty!"
    }

    return error
}

let formWrapped = reduxForm({
    form: 'deliveryNote',
    validate: validate
})(DeliveryNote)

export default connect(null, {updateDeliveryNote})(formWrapped)