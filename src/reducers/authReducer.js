const INTIAL_STATE = {
    signedIn: false,
    currentShopper: {
        shopper_info: {}
    },
    numbers: [],
    addresses: []
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {
                ...state, 
                signedIn: true,
                currentShopper: action.payload.current_shopper,
                numbers: action.payload.numbers,
                addresses: action.payload.addresses
            }
        case 'SIGN_OUT':
            return INTIAL_STATE
        case 'PROFILE_INFO':
            return{
                ...state, currentShopper: { 
                        ...state.currentShopper,
                        shopper_info: action.payload
                }
            }
        case 'EDIT_SHOPPER':
            return{
                ...state, currentShopper: action.payload
            }
        case 'EDIT_PROFILE':
            return{
                ...state, currentShopper: {
                    ...state.currentShopper,
                    shopper_info: action.payload
                }
            }
        case 'ADD_SHOPPER_ADDRESS':
            return {
                ...state, addresses: [
                        ...state.addresses, {
                            "street": action.payload.street,
                            "city": action.payload.city,
                            "state": action.payload.state,
                            "zip_code": action.payload.zip_code
                        }
                    ]
            }
            

        case 'ADD_SHOPPER_CONTACT':
            return {
                ...state, numbers: [
                    ...state.numbers, action.payload
                ]
            }

        default:
            return state 
    }
}