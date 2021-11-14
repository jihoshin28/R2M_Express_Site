import React from 'react'
import { connect } from 'react-redux'
import { itemPicModal } from '../actions'

const ItemPic = (props) => {

    return (
        <React.Fragment>
            <a onClick = {()=> props.itemPicModal(props.item_id)} style = {{cursor: "pointer", display:'block', height: '100%'}} data-toggle="modal" data-target="#Modal">
                <img src={props.image} class="card-img-top card-image" alt="..." />
            </a>
        </React.Fragment>
    )
}

export default connect(null, { itemPicModal })(ItemPic)