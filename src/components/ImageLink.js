import React from 'react'
import { connect } from 'react-redux'
import { imageModal } from '../actions'

const ImageLink = (props) => {

    return (
        <React.Fragment>
            <a index = {props.index} onClick = {()=> props.imageModal(props.image)} style = {{cursor: "pointer", display:'block', height: '100%'}} data-toggle="modal" data-target="#Modal">
                <img src={props.image.src} class="card-img-top card-image" alt="..." />
            </a>
        </React.Fragment>
    )
}

export default connect(null, { imageModal })(ImageLink)