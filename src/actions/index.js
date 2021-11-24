import rails from '../services/Express'

//STORE ACTIONS
export const getStores = () => async dispatch => {
    const response = await rails.get(`/stores`)
    let store = response.data.data.find(store => store.id == 1)
    console.log(store)
    dispatch({ type: 'GET_STORES', payload: {
        stores: response.data.data,
        store: store
    }})
}

export const selectStore = (store) => {
    return ({
        type: 'SELECT_STORE',
        payload: store
    })
}

//ITEM ACTIONS

export const clearItem = () => {
    return ({
        type: 'CLEAR_ITEM'
    })
}

export const getItem = (item_id) => async dispatch => {
    const response = await rails.get(`/items/${item_id}`)
    console.log(response.data, "items")
    dispatch({ type: 'GET_ITEM', payload: response.data })
}

export const clearItemPic = () => {
    return ({
        type: 'CLEAR_ITEM_PIC'
    })
}

export const getItems = (store_id) => async dispatch => {
    const response = await rails.get(`/items?store_id=${store_id}`)
    console.log(response.data, "items")
    dispatch({type: 'GET_ITEMS', payload: response.data})
}

//REVIEW ACTIONS

// need pagination for reviews
export const getReviews = async dispatch => {
    const response = await rails.get('/reviews')
    console.log(response.data, 'reviews')

}


export const postReview = reviewInfo => async dispatch => {
    console.log(reviewInfo)
    const response = await rails.post('/reviews', {reviewInfo})
    let data = response.data
    console.log(data)
}


//QUOTE ACTIONS

export const createQuote = quoteInfo => async()  => {
    console.log(quoteInfo)
    const response = await rails.post('/quotes', {quoteInfo})
    let data = response.data
    console.log(data)
}

export const editQuote = (quoteId, quoteInfo) => async() => {
    const response = await rails.put(`/quotes/${quoteId}`, {quoteInfo})
    let data = response.data
    console.log(data)
}

export const deleteQuote = quoteId => async() => {
    const response = await rails.delete(`/quotes/${quoteId}`)
    let data = response.data
    console.log(data)
}

//QUOTE ITEM ACTIONS

export const addQuoteItem = quoteItemInfo => async dispatch => {
    console.log(quoteItemInfo)
    const response = await rails.post('/cart_items', {quoteItemInfo})
    let data = response.data
    console.log(data.data, 'cart_item added')
    dispatch({ type: "ADD_CART_ITEM", 
        payload: { 
            id: data.data.id,
            cart_item: data.data,
            item_id: data.data.attributes.item_id
        }
    })
}

export const removeCartItem = (cartItemId, itemId) => async dispatch => {
    const response = await rails.delete(`/cart_items/${cartItemId}`)
    let data = response.data 
    console.log(data)
    dispatch({type: "DROP_CART_ITEM", 
        payload: {
            cart_item_id: cartItemId,
            item_id: itemId
        }
    })
}

export const cartItemCount = (newCount, cartItemId) => {
    console.log(newCount, cartItemId)
    return ({
        type: "CHANGE_COUNT_CART_ITEM",
        payload: { count: newCount, cartItemId: cartItemId }
    })
}

//AUTH ACTIONS

export const getCurrentUser = (shopperId) => async dispatch => {
    const response = await rails.get(`/shoppers/${shopperId}`)
    let data = response.data

}

export const signIn = (userInfo) => async dispatch => {
    const response = await rails.post('/login', {shopper: userInfo})
    let data = response.data
    localStorage.setItem('shopper_token', data.jwt)
    dispatch({
        type: 'SIGN_IN',
        payload: {
            'current_shopper': data.shopper.data.attributes,
            'numbers': data.shopper.data.attributes.phones.map((number) => {
                return number.number
            }),
            'addresses': data.shopper.data.attributes.addresses.map(address => {
                return{
                    "street": address.street,
                    "city": address.city,
                    "state": address.state,
                    "zip_code": address.zip_code
                }
            })
        }
    })
}

export const signOut = () => {
    localStorage.removeItem('shopper_token')
    return {
        type: 'SIGN_OUT'
    }
}

//USER PROFILE ACTIONS

export const createShopperProfile = (shopperInfo) => async dispatch => {
    const response = await rails.post('/shopper_infos/', shopperInfo)
    let data = response.data
    console.log(data)
    dispatch({
        type: 'PROFILE_INFO',
        payload: data.data
    })
}

export const editShopper = (form, id) => async dispatch => {
    console.log(form)
    const response = await rails.patch(`/shoppers/${id}`, form)
    let data = response.data
    console.log(data.data)
    dispatch({ type: "EDIT_SHOPPER", payload: data.data.attributes })
}

export const editShopperProfile = (form, id) => async dispatch => {
    const response = await rails.patch(`/shopper_infos/${id}`, form)
    let data = response.data.data
    console.log(data)
    dispatch({ type: "EDIT_PROFILE", payload: data.attributes })
}

export const storeCoords = (coords) => {
    return({
        type: 'STORE_COORDS',
        payload: coords
    })
}

export const userCoords = (coords) => {
    return ({
        type: 'USER_COORDS',
        payload: coords
    })
}

//PAYMENT ACTIONS

export const stripePayment = (event, stripePromise, checkoutItems) => async dispatch => {
    const stripe = await stripePromise
    
    const response = await rails.post('/stripe_payments/checkout', {'checkout_items': checkoutItems})
    
    const session = await response.data
    
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    })
    console.log(result, "payment result!")
}

//MODAL ACTIONS

export const imageModal = (image) => async dispatch => {
    dispatch({ type: 'ITEM_PIC_MODAL', payload: image })
}

export const addressModal = () => {
    return({
        type: "ADDRESS_MODAL"
    })
}

export const numberModal = () => {
    return({
        type: "NUMBER_MODAL"
    })
}

export const cancelOrderModal = (id) => {
    return({
        type: "CANCEL_ORDER_MODAL",
        payload: id
    })
}

export const clearModal = () => {
    return({
        type: 'CLEAR_MODAL'
    })
}

//ADDRESS ACTIONS

export const addShopperAddress = (form) => async dispatch => {
    console.log(form)
    const response = await rails.post('/addresses', {'address': form})
    const data = response.data
    console.log(data.data.attributes)
    dispatch({
        type: "ADD_SHOPPER_ADDRESS",
        payload: data.data.attributes
    })
}

//EMAIL ACTIONS

export const addShopperEmail = (form) => async dispatch => {
    const response = await rails.post('/emails', {form})
    const data = response.data
    console.log(data)
}

//NUMBER ACTIONS

export const addShopperNumber = (form) =>  async dispatch => {
    console.log(form)
    const response = await rails.post('/phones', {'phone': form})
    const data = response.data
    console.log(data)
    dispatch({
        type: "ADD_SHOPPER_CONTACT",
        payload: data.data.attributes.number
    })
}

