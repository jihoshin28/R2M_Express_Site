let INITIAL_STATE = {
    submit: null,
    confirm: null,
    item_pic: null
}

export default (state = INITIAL_STATE, action) => {

    if (action.type === 'ITEM_PIC_MODAL') {
        return { ...state, item_pic: action.payload }
    }

    if(action.type === 'CLEAR_ITEM_PIC'){
        return { ...state, item_pic: null }
    }

    if(action.type === 'CANCEL_ORDER_MODAL'){
        return { 
            ...state, confirm: {
                "title": "Delete Order",
                "message": "Are you sure you want to cancel this order?",
                "id": action.payload
            }
        }
    } else if(action.type === 'ADDRESS_MODAL'){
        return { 
            ...state, submit: {
                "title": "Add Address",
                'type' : "address"
            }
        }
    } else if(action.type === 'NUMBER_MODAL'){
        return { 
            ...state, submit: {
                "title": "Add Number",
                'type': 'number'
            }
        }
    } else if (action.type === "CLEAR_MODAL"){
        return{
            submit: null,
            confirm: null,
            item_pic: null
        }
    } 
    return state
}