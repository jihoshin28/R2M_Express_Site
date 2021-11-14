import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { addShopperNumber, addShopperAddress} from '../../actions'



class SubmitModal extends React.Component {
    type = this.props.submitType 
    renderInput = ({ input, meta, label }) => {
        return (
            <div class = "form-group modal-form">
                <label style = {{left: '0'}}> {label}</label>
                <input class= "form-control" {...input} /> 
                <div>{meta.error} </div>
            </div>
        )
    }

    renderAddressSelect = ({input, meta}) => {
        console.log(input)
        return (
            <div class = "form-group modal-form">
                <label for="inputState">State</label>
                <select {...input} id="inputState" class="form-control">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>	
                <div>{meta.error} </div>
            </div>
        )
    }

    renderForm = () => {
        if(this.type === "number"){
            return (
                <form style = {{width: '100%'}} id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
                    <Field name = "number" component = {this.renderInput} label = "Number"/>
                </form>
            )
        } else if(this.type === "address"){
            return(
                <form style = {{width: '100%'}} id = "modalSubmit" onSubmit = {this.props.handleSubmit(this.submit)}>
                    <Field name = "street" component = {this.renderInput} label = "Street "/>
                    <Field name = "city" component = {this.renderInput} label = "City "/>
                    <Field name = "state" component = {this.renderAddressSelect} label = "State "/>
                    <Field name = "zip_code" component = {this.renderInput} label = "Zip Code "/>
                </form>
            )
        }
    }

    submit = (formValues) => {

        return new Promise((resolve, reject) => {
            const errors = validate(formValues, this.type)
            if(errors.empty){
                reject(new SubmissionError(errors))
            } else {
                resolve(formValues)
            }
        }).then((formValues) => {
            if('number' in formValues){
                this.props.addShopperNumber(
                    {
                        ...formValues,
                        phoneable_type: 'Shopper', 
                        phoneable_id: this.props.shopperId
                    }
                )
            } else {
                this.props.addShopperAddress(
                    {
                        ...formValues,
                        addressable_type: 'Shopper', 
                        addressable_id: this.props.shopperId
                    }
                )
            }
        })
    }

    render(){
        return (
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id = "ModalLabel">{this.props.submit.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class = "modal-form">
                        {this.renderForm()}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" form = "modalSubmit">Submit</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
            
        )
    }
}

let validate = (formValues, type) => {
    let error = {}
    if(type === 'number' && formValues.number){
        if(formValues.number.length !== 10){
            error.number = "Please enter a valid number."
        }
    }

    if(type === 'address'){
        if(!formValues.street){
            error.street = "Please enter a street." 
        }
        if(!formValues.city){
            error.city = "Please enter a city." 
        }
        if(!formValues.state){
            error.state = "Please enter a state." 
        }
        if(!formValues.zip_code){
            error.zip_code = "Please enter a zip code." 
        }
    }

    return error
}

let formWrapped = reduxForm({
    form: 'modalSubmit',
    validate: validate
})(SubmitModal)

let mapStateToProps = state => {
    return({
        shopperId: state.auth.currentShopper.id,
        submitType: state.modals.submit.type
    })
} 

export default connect(mapStateToProps, {addShopperAddress, addShopperNumber})(formWrapped)