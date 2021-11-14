import React, {useState, useEffect} from 'react' 
import {connect} from 'react-redux'
import { clearModal } from '../actions'
import ItemModal from './modals/ItemModal'
import ConfirmModal from './modals/ConfirmModal'
import SubmitModal from './modals/SubmitModal'

const Modal = (props) => {
    
    const[ref] = useState(React.createRef())
    const[show] = useState("")
    
    useEffect(() => {
        console.log(props)
        const selectedDiv = ref.current
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0
        }

        function clearContent(){
            props.clearModal()
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
        if(!props.modal.item_pic && !props.modal.confirm && !props.modal.submit){
            return 
        } else if(props.modal.item_pic){
            let item = props.modal.item_pic.data.attributes
            return (
                <ItemModal name = {item.name} image = {item.image} />
            )
        } else if(props.modal.confirm){
            return (
                <ConfirmModal id = {props.modal.confirm.id} title = {props.modal.confirm.title} message = {props.modal.confirm.message}/>
            )
        } else if(props.modal.submit){
            return (
                <SubmitModal/>
            )
        } 
    }
        return (
            <div ref = {ref} class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    {renderContent()}
                </div>
            </div>
    
        )
}

export default connect(null, { clearModal })(Modal)