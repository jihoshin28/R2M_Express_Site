import React from 'react'
import { connect } from 'react-redux'
import { clearModal } from '../../actions'

class ConfirmModal extends React.Component {

    componentDidMount(){
        console.log(this.props.confirm)
    }

    render(){
        return(
            <div class="modal-content">
                
                {
                    this.props.title === "Loading..." ?
                    <React.Fragment>
                        <div class="modal-header">
                            <h3 class="modal-title" id = "ModalLabel">{this.props.title}</h3>
                        </div>
                        <div class="modal-body">
                            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px'}}>
                                <div class = "loader">
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <div class="modal-header">
                        <h3 class="modal-title" id = "ModalLabel">
                            {this.props.title}
                        </h3>
                        
                        </div>
                        <div class="modal-body" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px'}}>
                            <h4>{this.props.message}</h4>
                        </div>
                        <div class="modal-footer">
                            <button onClick = {() => this.props.clearModal()} data-toggle="modal" data-target="#Modal" type="button" class="btn btn-primary">Confirm</button>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}



export default connect(null, {clearModal})(ConfirmModal)