import React from 'react'
import { connect } from 'react-redux'
import { getItem } from '../actions'

class ItemDetails extends React.Component{
    componentDidMount(){
        this.props.getItem(this.props.match.params.item_id)
    }

    renderDetail(){
        if(!!this.props.item){
            return (
                <div>
                    <img src={this.props.item.data.attributes.image}></img>
                    <h3>{this.props.item.data.attributes.name}</h3>
                    <h3>${(this.props.item.data.attributes.price / 100).toFixed(2)} per {this.props.item.data.attributes.quantity_unit}</h3>
                </div>
            )
        }
    }

    render(){
        return(
            <div class = "itemDetails">
                <h1>Item Details</h1>
                {this.renderDetail()}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return({
        item: state.items.selectedItem
    })
}

export default connect(mapStateToProps, {getItem})(ItemDetails)
