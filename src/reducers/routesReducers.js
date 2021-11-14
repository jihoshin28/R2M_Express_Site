export default (state = [], action) => {
    if(action.type === 'ROUTE_CHANGE'){
        action.payload.push('/')
    }
    if (action.type === "ROUTE_TEST"){
        return [...state, action.payload]
    }
    return state
}
