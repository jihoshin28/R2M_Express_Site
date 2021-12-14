import React, {useState, useEffect} from 'react' 
import {connect} from 'react-redux'
import { confirmModal } from '../actions'
import ItemModal from './modals/ImageModal'
import ConfirmModal from './modals/ConfirmModal'
import SubmitModal from './modals/SubmitModal'

const Modal = (props) => {
    
    const[ref] = useState(React.createRef())
 
    
    useEffect(() => {
        console.log(props)
        const selectedDiv = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }

        function clearContent(){
            props.confirmModal()
        }
        
        const observer = new MutationObserver(function (mutationList, observer) {
            let mutation = mutationList[0]
            console.log(mutation, props.history)
            if(mutation.target.className === "modal fade show"){
                return
            } else {
                clearContent()
            }
        }, options)
        observer.observe(selectedDiv, {
            attributes: true,
            attributeFilter: ["class"]
        })
    }, [])

    // let closeForm = (e) => {
    //     ref.current.classList = "modal fade"
    //     console.log(ref.current)
    // }

    let renderContent = () => {
        if(!props.modal.image && !props.modal.confirm && !props.modal.submit){
            return 
        } else if(props.modal.image){
            
            return (
                <ItemModal name = {"Picture"} image = {props.modal.image} />
            )
        } else if(props.modal.confirm){
            return (
                <ConfirmModal history = {props.history} title = {props.modal.confirm.title} message = {props.modal.confirm.message}/>
            )
        } else if(props.modal.submit){
            return (
                <SubmitModal/>
            )
        } 
    }
        return (
            <div ref = {ref} class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered modal-lg" role = "document">
                    {renderContent()}
                </div>
            </div>
    
        )
}

export default connect(null, { confirmModal })(Modal)