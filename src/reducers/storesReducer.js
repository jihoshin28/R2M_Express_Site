let INITIAL_STATE = {
    storesList: [],
    selectedStore: null,
    coords: {}
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_STORES'){
        return { storesList: action.payload.stores, selectedStore: action.payload.store }
    }

    if(action.type === 'SELECT_STORE'){
        return {...state, selectedStore: action.payload}
    }

    if(action.type === 'STORE_COORDS'){
        return {...state, store_coords: action.payload}
    }

    if(action.type === 'USER_COORDS'){
        return{...state, user_coords: action.payload}
    }
    
    return state
}