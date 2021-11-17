import React from 'react'

class ImageModal extends React.Component {
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div class = "modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">{this.props.image.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img style = {{width: '100%'}} src = {`${this.props.image.src}`}/>
                </div>
            </div>
        )
    }
}

export default ImageModal