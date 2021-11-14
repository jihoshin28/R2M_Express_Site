let INITIAL_STATE = {
    itemsList: [],
    selectedItem: null
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_ITEMS'){
        return {...state, itemsList: action.payload}
    }

    if (action.type === 'GET_ITEM') {
        return { ...state, selectedItem: action.payload }
    }

    if(action.type === 'CLEAR_ITEM'){
        return { ...state, selectedItem: null }
    }

    return state
}