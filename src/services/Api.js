const API_ROOT = 'http://localhost:3000'

let token = localStorage.getItem('rails_token')

const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    "Authorization": token
}

//AUTH METHODS

//GET METHODS

const Shopper = async (id) => {
    const response = await fetch(API_ROOT + `/shoppers/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}


const Driver = async (id) => {
    const response = await fetch(API_ROOT + `/drivers/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const Stores = async () => {
    const response = await fetch(API_ROOT + '/stores', {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const Store = async (id) => {
    const response = await fetch(API_ROOT + `/stores/${id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const OpenOrders = async (status) => {
    const response = await fetch(API_ROOT + `/orders/?status=${status}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}


const StoreOrders = async (store_id) => {
    const response = await fetch(API_ROOT + `/orders/?store_id=${store_id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const ShopperActiveOrder = async (shopper_id, status) => {
    const response = await fetch(API_ROOT + `/orders/?shopper_id=${shopper_id}&status=${status}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const ShopperOrders = async (shopper_id) => {
    const response = await fetch(API_ROOT + `/orders/?shopper_id=${shopper_id}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const Items = async () => {
    const response = await fetch(API_ROOT + '/items', {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const ItemsCategory = async (category) => {
    const response = await fetch(API_ROOT + `/items/?category=${category}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}   


const CartItemsOrder = async (order) => {
    const response = await fetch(API_ROOT + `/cart_items/?order=${order}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const CartItemsStatus = async (order, status) => {
    const response = await fetch(API_ROOT + `/cart_items/?order=${order}&status=${status}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

const DriverOrder = async (order, status) => {
    const response = await fetch(API_ROOT + `/order/?order=${order}&status=${status}`, {
        method: 'GET',
        headers: headers
    })
    return response.json()
}

//POST METHODS

const shopperSignUp = async () => {

}

const driverSignUp = async () => {

}

//UPDATE METHODS



//DELETE METHODS

export default {
    get: {
        Shopper,
        Stores,
        Store,
        OpenOrders,
        ShopperActiveOrder,
        StoreOrders,
        ShopperOrders,
        Items,
        ItemsCategory,
        CartItemsOrder,
        CartItemsStatus
    },
    post: {
        shopperSignUp
    }, 
    update: {

    }, 
    delete: {

    }

}