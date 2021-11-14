import React from 'react'
import { connect } from 'react-redux'
import {updateOrderSubstitute} from '../../actions'
import CheckoutRowButton from '../buttons/CheckoutRowButton'

class Substitute extends React.Component {
    constructor(){
        super()
        this.state = {
            checked: null
        }
    }
  
    selectOption = (e) => {
        let substitute = {
            'phrase': e.currentTarget.children[0].children[1].children[0].innerHTML,
            'value': e.currentTarget.value
        }
        this.setState({
            checked: e.currentTarget.value
        })
        this.props.updateOrderSubstitute(substitute)
    }

    render(){
        return(
            <div className = "ui container">
                <h4 style = {{left: 0}}>
                    If you can't find my items:
                </h4>
                <div className = "button-options">
                    <CheckoutRowButton checked = {this.state.checked} selectOption = {this.selectOption} value = 'contact' text = "Contact me for replacements."/> 
                    <CheckoutRowButton checked = {this.state.checked} selectOption = {this.selectOption} value = 'choose' text = "Choose any replacements for me."/> 
                    <CheckoutRowButton checked = {this.state.checked} selectOption = {this.selectOption} value = 'none' text = "Don't make any replacements"/> 
                </div>
            </div>
        )
    }
}

export default connect(null, {updateOrderSubstitute})(Substitute)