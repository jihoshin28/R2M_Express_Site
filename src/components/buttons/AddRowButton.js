import React from 'react'

class AddRowButton extends React.Component {
    render(){
        return(
            <div className = "button-div">
                <button className = "btn btn-success" onClick = {() => this.props.numberModal()} style = {{width: "100%"}} data-toggle="modal" data-target="#Modal">
                    <div className = "checkout-add-div">
                        <span> 
                            <img className = "checkout-add-img" src = {`${process.env.PUBLIC_URL}/plusMark.svg`} />
                            {this.props.text}
                            </span>
                        </div>
                </button> 
            </div>
        )
    }
}

export default AddRowButton