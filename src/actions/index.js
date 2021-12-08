import express from '../services/Express'

//BOOKING ACTIONS

export const getBooking = bookingId => async() => {
    const response = await express.get(`/bookings/${bookingId}`)
    let data = response.data
    console.log(data)
    return data
}

export const makeBooking = bookingInfo => async dispatch => {
    const response = await express.post('/bookings', {bookingInfo})
    let data = response.data
    return data
}

//ITEM ACTIONS

export const clearItem = () => {
    return ({
        type: 'CLEAR_ITEM'
    })
}

export const getItem = (item_id) => async dispatch => {
    const response = await express.get(`/items/${item_id}`)
    console.log(response.data, "items")
    dispatch({ type: 'GET_ITEM', payload: response.data })
}

export const clearItemPic = () => {
    return ({
        type: 'CLEAR_ITEM_PIC'
    })
}

export const getItems = (store_id) => async dispatch => {
    const response = await express.get(`/items`)
    let data = response.data
    return data
}

//REVIEW ACTIONS

// need pagination for reviews
export const getReviews = async dispatch => {
    const response = await express.get('/reviews')
    console.log(response.data, 'reviews')

}

export const postReview = reviewInfo => async dispatch => {
    console.log(reviewInfo)
    const response = await express.post('/reviews', {reviewInfo})
    let data = response.data
    console.log(data)
}


export const editReview = (reviewId, reviewInfo)=> async dispatch => {
    const response = await express.put(`/reviews/${reviewId}`, {reviewInfo})
    let data = response.data
    console.log(data)
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await express.delete(`/reviews/${reviewId}`)
    let data = response.data
    console.log(data)
}

//QUOTE ACTIONS

export const getQuote = quoteId => async() =>{
    const response = await express.get(`/quotes/${quoteId}`)
    let data = response.data
    return data
}

export const createQuote = quoteInfo => async() => {
    const response = await express.post('/quotes', {quoteInfo})
    let data = response.data
    console.log(data)
    return data
}

export const editQuote = (quoteId, quoteInfo) => async() => {
    console.log(quoteId, quoteInfo)
    const response = await express.put(`/quotes/${quoteId}`, {quoteInfo})
    let data = response.data
    console.log(data)
    return data
}

export const deleteQuote = quoteId => async() => {
    const response = await express.delete(`/quotes/${quoteId}`)
    let data = response.data
    console.log(data)
}

//QUOTE ITEM ACTIONS

export const addQuoteItem = quoteItemInfo => async dispatch => {
    const response = await express.post('/quote_items', {quoteItemInfo})
    console.log(response.data)
}

export const addBookingItem = bookingItemInfo => async () => {
    const response = await express.post('/booking_items', {bookingItemInfo})
    console.log(response.data)
}

export const removeCartItem = (cartItemId, itemId) => async dispatch => {
    const response = await express.delete(`/cart_items/${cartItemId}`)
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
    const response = await express.get(`/shoppers/${shopperId}`)
    let data = response.data

}

export const signIn = (userInfo) => async dispatch => {
    const response = await express.post('/login', {shopper: userInfo})
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
    const response = await express.post('/shopper_infos/', shopperInfo)
    let data = response.data
    console.log(data)
    dispatch({
        type: 'PROFILE_INFO',
        payload: data.data
    })
}

export const editShopper = (form, id) => async dispatch => {
    console.log(form)
    const response = await express.patch(`/shoppers/${id}`, form)
    let data = response.data
    console.log(data.data)
    dispatch({ type: "EDIT_SHOPPER", payload: data.data.attributes })
}

export const editShopperProfile = (form, id) => async dispatch => {
    const response = await express.patch(`/shopper_infos/${id}`, form)
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

export const userLocation = async() => {
    const response = await express.get('/user_location')
    let data = response.data
    console.log(data)
}

//CONTACT ACTIONS

export const submitContact = contactInfo => async dispatch => {
    console.log(contactInfo)
    const response = await express.post('/contacts', {contactInfo}) 
    let data = response.data
    console.log(data)
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

//LOCATION ACTIONS 

export const updateStartLocation = (data) => async dispatch => {
    
    dispatch({
        type: "UPDATE_START_LOCATION",
        payload: data
    })
}


export const addShopperAddress = (form) => async dispatch => {
    console.log(form)
    const response = await express.post('/addresses', {'address': form})
    const data = response.data
    console.log(data.data.attributes)
    dispatch({
        type: "ADD_SHOPPER_ADDRESS",
        payload: data.data.attributes
    })
}

//EMAIL ACTIONS

export const addShopperEmail = (form) => async dispatch => {
    const response = await express.post('/emails', {form})
    const data = response.data
    console.log(data)
}

//NUMBER ACTIONS

export const addShopperNumber = (form) =>  async dispatch => {
    console.log(form)
    const response = await express.post('/phones', {'phone': form})
    const data = response.data
    console.log(data)
    dispatch({
        type: "ADD_SHOPPER_CONTACT",
        payload: data.data.attributes.number
    })
}

