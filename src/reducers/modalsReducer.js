let INITIAL_STATE = {
    submit: null,
    confirm: null,
    image: null
}

export default (state = INITIAL_STATE, action) => {

    if (action.type === 'ITEM_PIC_MODAL') {
        return { ...state, image: action.payload }
    }

    if(action.type === 'CLEAR_ITEM_PIC'){
        return { ...state, item_pic: null }
    }

    if(action.type === 'LOADING_MODAL'){
        return { 
            ...state, confirm: {
                "title": "Loading..."
            }
        }
    }

    if(action.type === 'CONFIRM_MODAL'){
        return { 
            ...state, confirm: {
                "title": "Quote submitted!",
                "message": `Thank you your quote has been submitted! We have sent you an email at ${action.payload.email} for confirmation.`
            }
        }
    }
    if(action.type === 'ADDRESS_MODAL'){
        return { 
            ...state, submit: {
                "title": "Add Address",
                'type' : "address"
            }
        }
    }
    if(action.type === 'NUMBER_MODAL'){
        return { 
            ...state, submit: {
                "title": "Add Number",
                'type': 'number'
            }
        }
    
    } 
    
    if (action.type === "CLEAR_MODAL"){
        return{
            submit: null,
            confirm: null,
            item_pic: null
        }
    } 
    return state
}