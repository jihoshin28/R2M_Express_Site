import React from 'react'

class CheckoutColumnButton extends React.Component {
    
    render(){
        let btnClass 
        this.props.selected === this.props.value.toString() ? btnClass = 'btn btn-success' : btnClass = 'btn btn-light-outline'
        
        return(
            <div className = "button-div">
                <div style = {{borderRadius: "3px", webkitBoxShadow: "0px 0 5px rgba(99, 99, 99, 0.842)", width: '85%', marginLeft: '7%'}}>
                    <button style = {{border: '1px solid black'}} class = {btnClass} type = "button" onClick = {(e) => this.props.selectOption(e)} style = {{width: "100%"}} value = {this.props.value}>{this.props.text}</button> 
                </div>
            </div>
        )
    }
}

export default CheckoutColumnButton