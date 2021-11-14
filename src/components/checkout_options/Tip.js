import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {updateOrderTip} from '../../actions'
import CheckoutColumnButton from '../buttons/CheckoutColumnButton'

class Tip extends React.Component {

    constructor(){
        super()
        this.state = {
            otherSelect: false,
            selected: null
        }
    }

    selectOption = (e) => {
        console.log(e.target.value)
        let tip = (e.target.value/ 100) * this.props.currentTotal
        this.props.updateOrderTip({
            'amount': tip, 
            'value': e.currentTarget.value
        })
        this.setState({
            selected: e.currentTarget.value,
            otherSelect: false
        })
    }

    selectOther = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            otherSelect: true, 
            selected: e.currentTarget.value
        })
    }
    
    submitOther = (e) => {
        e.preventDefault()
        let tip = (e.currentTarget.children[0].value / 100) * this.props.currentTotal
        this.props.updateOrderTip({
            'amount': tip, 
            'value': e.currentTarget.children[0].value
        })
        this.setState({
            otherSelect: false
        })
    }

    render() {
        return (
            <div className = "ui container">
                <div className = "button-options-row">
                    <CheckoutColumnButton selected = {this.state.selected} value = {0} text = "None" selectOption = {this.selectOption} />
                    <CheckoutColumnButton selected = {this.state.selected} value = {5} text = "5%" selectOption = {this.selectOption} />
                    <CheckoutColumnButton selected = {this.state.selected} value = {10} text = "10%" selectOption = {this.selectOption} />
                    <CheckoutColumnButton selected = {this.state.selected} value = {15} text = "15%" selectOption = {this.selectOption} />
                    <CheckoutColumnButton selected = {this.state.selected} value = {'other'} text = "Other" selectOption = {this.selectOther} />
                </div>
                <div>
                {
                    this.state.otherSelect ?
                    <form id = "otherTip" onSubmit = {(e) => this.submitOther(e)}>
                        
                        <input style = {{marginTop: '2%'}} type="text" class="form-control" id="tipForm" aria-describedby="emailHelp" placeholder="Enter new tip %"/>
                        <button style = {{float: 'left', marginTop: '2%'}} class = "btn btn-primary" type = "submit" form = "otherTip" >Submit</button>
                    </form>
                    :
                    <div></div>
                }
                </div>
            </div>
            
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        currentTotal: state.order.total,
        shopperId: state.auth.currentShopper.id
    })
}

export default connect(mapStateToProps, {updateOrderTip})(Tip)