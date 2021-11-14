export default (state = [], action) => {
    if(action.type === 'GET_CATEGORIES'){
        return action.payload
    }
    return state
}