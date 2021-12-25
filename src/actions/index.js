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
export const getReviews = () => async dispatch => {
    const response = await express.get('/reviews')
    let data = response.data
    return data
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
    return data
}

//QUOTE ACTIONS

export const getQuotes = () => async() =>{
    const response = await express.get(`/quotes`)
    let data = response.data
    return data
}

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

export const finalizeQuote = (quoteId, quoteInfo) => async() => {
    console.log(quoteId, quoteInfo)
    const response = await express.put(`/send_quote/${quoteId}`, {quoteInfo})
    let data = response.data
    console.log(data)
    return data
}

export const deleteQuote = quoteId => async() => {
    const response = await express.delete(`/quotes/${quoteId}`)
    let data = response.data
    return data
}

//QUOTE ITEM ACTIONS

export const addQuoteItem = quoteItemInfo => async dispatch => {
    const response = await express.post('/quote_items', {quoteItemInfo})
    return response
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

export const verifyToken = (token) => async() => {
    const response = await express.post('/verify_token', {token})
    let data = response.data
    return data
}

export const login = (loginInfo) => async dispatch => {
    const response = await express.post('/login', {loginInfo})
    let data = response.data
    if(!!data.success){
        localStorage.setItem('admin-token', data.token)
    } 
    return data
}

export const signOut = () => async dispatch => {
    localStorage.removeItem('admin-token')
}



//CONTACT ACTIONS

export const submitContact = contactInfo => async dispatch => {
    console.log(contactInfo)
    const response = await express.post('/contacts', {contactInfo}) 
    let data = response.data
    return data
}

//MODAL ACTIONS

export const imageModal = (image) => async dispatch => {
    dispatch({ type: 'ITEM_PIC_MODAL', payload: image })
}

export const loadingModal = () => {
    return({
        type: "LOADING_MODAL"    
    })
}

export const confirmModal = (email) => {
    return({
        type: "CONFIRM_MODAL",
        payload: {
            email
        }
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


export const geoCode = () => async dispatch => {
    const response = await express.get('/locations')
    const data = response.data
    console.log(data)
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

