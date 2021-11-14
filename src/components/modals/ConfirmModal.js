import React from 'react'
import { connect } from 'react-redux'
import { cancelOrder } from '../../actions'

class ConfirmModal extends React.Component {

    componentDidMount(){
        console.log(this.props.confirm)
    }

    confirm = async (title, id) => {
        if(title === "Delete Order"){
            await this.props.cancelOrder(id)
            window.location.reload()
        }
    }

    render(){
        return(
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id = "ModalLabel">{this.props.message}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <p>{this.props.message}</p>
                </div>
                <div class="modal-footer">
                    <button onClick = {() => this.confirm(this.props.title, this.props.id)} type="button" class="btn btn-primary">Confirm</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {cancelOrder})(ConfirmModal)