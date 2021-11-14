import rails from '../services/Rails'
import categories from '../categories'

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

//CATEGORY ACTIONS

export const getCategories = (store_id) => {
    return {
        type: 'GET_CATEGORIES',
        payload: categories[store_id]
    }
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


//CART ACTIONS

export const getCart = (cart_id) => async dispatch => {
    const response = await rails.get(`/cart_items?cart_id=${cart_id}`)
    let data = response.data
    console.log(data.data)
    dispatch({type: "GET_CART", payload: data.data})
}

export const startCart = cartInfo => async dispatch => {
    const response = await rails.post('/carts', {cart: cartInfo})
    let data = response.data
    console.log(data.cart.data.attributes, 'cart')
    localStorage.setItem('cart_token', data.jwt)
    dispatch({ type: 'START_CART', payload: data.cart})
}

export const dropCart = cartId => async dispatch => {
    const response = await rails.delete(`/carts/${cartId}`)
    dispatch ({
        type: 'DROP_CART'
    })
}

//CART ITEM ACTIONS

export const addCartItem = cartItemInfo => async dispatch => {
    console.log(cartItemInfo)
    const response = await rails.post('/cart_items', {cart_item: cartItemInfo})
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

//ORDER ACTIONS

export const getOrder = orderId => async dispatch => {
    const response = await rails.get(`/orders/${orderId}`)
    let id = parseInt(response.data.data.id)
    let orderData = response.data.data.attributes
    console.log(id, orderData)
    dispatch({
        type: "GET_ORDER", payload: orderData
    })
}

export const clearOrder = () => {
    return({
        type: "CLEAR_ORDER"
    })
}

export const preOrder = orderInfo => async dispatch => {
    const response = await rails.post(`/orders`, {order: orderInfo})
    let id = parseInt(response.data.data.id)
    let orderData = response.data.data.attributes
    console.log(response)
    dispatch({type: "PRE_ORDER", payload: {
            id: id,
            order: orderData
        } 
    })
}

export const updatePreOrder = (orderId, orderInfo) => async dispatch => {
    console.log(orderId)
    const response = await rails.patch(`/orders/${orderId}`, {order: orderInfo})
    console.log(response.data)
    let id = parseInt(response.data.data.id)
    let orderData = response.data.data.attributes
    dispatch({
        type: "PRE_ORDER", payload: {
            id: id,
            order: orderData
        }
    })
}

export const getActiveOrders = shopperId => async dispatch => {
    const response = await rails.get(`/orders?shopper_id=${shopperId}&status=active`)
    let data = response.data.data
    dispatch({type: "GET_ACTIVE_ORDERS", payload: data})
}

export const getCompletedOrders = shopperId => async dispatch => {
    const response = await rails.get(`/orders?shopper_id=${shopperId}&status=completed`)
    let data = response.data.data
    dispatch({ type: "GET_COMPLETED_ORDERS", payload: data })
}

export const processOrder = (cartItems, cartId, orderId, orderInfo) => async() => {
    for (const cartItem of cartItems) {
        let orderItemInfo = {
            order_id: orderId,
            item_id: cartItem.attributes.item_id,
            quantity_num: cartItem.attributes.quantity_num,
            status: "pending"
        }
        await rails.post(`/order_items`, { order_item: orderItemInfo })
    }
    await rails.patch(`orders/${orderId}`, orderInfo)
    await rails.delete(`/carts/${cartId}`)
} 

export const checkoutOrder = () => {
    return ({
        type: "CHECKOUT_ORDER"
    })
}

export const changeOrderStatus = (id, status) => async dispatch => {
    const response = await rails.patch(`orders/${id}`, status)
    console.log(response.data)
}

export const addOrderItem = orderItemInfo => async dispatch => {
    const response = await rails.post(`/order_items`, {order_item: orderItemInfo})
    let data = response.data
    console.log(data)
}

export const removeOrderItem = orderItemId => async dispatch => {
    const response = await rails.delete(`/order_items/${orderItemId}`)
    let data = response.data
    console.log(data)
}

export const cancelOrder = (id) => async dispatch => {
    const response = await rails.delete(`/orders/${id}`)
    console.log(response.data)
    dispatch({ type: "CANCEL_ORDER", payload: id })
}

export const getOrderItems = (order_id) => async dispatch => {
    const response = await rails.get(`order_items?order_id=${order_id}`)
    console.log(response.data)
    dispatch({type: "GET_ORDER_ITEMS", payload: response.data.data})
}

export const clearOrderItems = () => {
    return({
        type: "CLEAR_ORDER_ITEMS"
    })
}

export const updateOrderAddress = (address) => {
    console.log('update address', address)
    return ({
        type: "UPDATE_ORDER_ADDRESS",
        payload: address
    })
}

export const updateOrderNumber = (number) => {
    return ({
        type: "UPDATE_ORDER_NUMBER",
        payload: number
    })
}

export const updateOrderTip = (tip) => {
    return({
        type: "UPDATE_ORDER_TIP",
        payload: tip
    })
}

export const updateOrderDeliveryTime = (delivery_time) => {
    return({
        type: "UPDATE_ORDER_DELIVERY_TIME",
        payload: delivery_time
    })
}

export const updateOrderSubstitute = (substitute) => {
    return({
        type: "UPDATE_ORDER_SUBSTITUTE",
        payload: substitute
    })
}

export const updateDeliveryNote = (note) => {
    console.log(note)
    return({
        type: "UPDATE_ORDER_DELIVERY_NOTE",
        payload: note
    })
}

export const selectOrderPayment = (method) => {
    return({
        type: "UPDATE_ORDER_PAYMENT_METHOD",
        payload: method.currentTarget.value
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

export const itemPicModal = (item_id) => async dispatch => {
    const response = await rails.get(`/items/${item_id}`)
    console.log(response.data, "items")
    dispatch({ type: 'ITEM_PIC_MODAL', payload: response.data })
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

