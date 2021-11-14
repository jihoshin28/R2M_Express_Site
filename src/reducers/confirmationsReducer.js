let INITIAL_STATE = {
    confirm: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'CONFIRM_CANCEL_ORDER'){
        return { 
            ...state, confirm: {
                "title": "Delete Order",
                "message": "Are you sure you want to cancel this order?",
                "id": action.payload.id
            }
        }
    } else if (action.type === "CLEAR_MODAL"){
        return{
            confirm: null
        }
    }
    return state
}