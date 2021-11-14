let INITIAL_STATE = {
    current_order_id: null,
    active_orders: [],
    completed_orders: [],
    order_items: [],
    order_info: {},
    subtotal:0,
    payment: 0,
    tax: 0,
    tip: {"amount": 0, "value": 0}, 
    total: 0,
    delivery_time: {
        "time": null, 
        "date": {
            "month": null,
            "day": null, 
        },
        "day": null
    }, 
    complete_time: null,
    substitute: {"phrase": null, "value": null},
    note: null,
    payment_method: null,
    address: null,
    number: null
}

export default (state = INITIAL_STATE, action) => {
    
    if(action.type === "PRE_ORDER"){
        return {...state, 
            current_order_id: action.payload.id, 
            subtotal: action.payload.order.subtotal,
            payment: action.payload.order.payment,
            tax: action.payload.order.tax,
            total: action.payload.order.total
        }
    }
    if(action.type === 'UPDATE_ORDER_NUMBER') {
        return {...state, 
            number: action.payload
        }
    }
   
    if(action.type === 'UPDATE_ORDER_ADDRESS') {
        return {...state, 
            address: action.payload
        }
    }

    if(action.type === 'UPDATE_ORDER_TIP') {
        return {...state, 
            tip: action.payload
        }
    }

    if(action.type === 'UPDATE_ORDER_DELIVERY_TIME') {
        return {...state, 
            delivery_time: action.payload
        }
    }

    if(action.type === 'UPDATE_ORDER_SUBSTITUTE') {
        return {...state, 
            substitute: action.payload
        }
    }

    if(action.type === 'UPDATE_ORDER_DELIVERY_NOTE') {
        return {...state, 
            note: action.payload
        }
    }

    if(action.type === 'UPDATE_ORDER_PAYMENT_METHOD') {
        return {...state, 
            payment_method: action.payload
        }
    }
    
    if(action.type === 'CHECKOUT_ORDER'){
        return INITIAL_STATE
    }
    
    if(action.type === "CANCEL_ORDER"){
        return {...state, active_orders: state.active_orders.filter(order => order.id !== action.payload)}
    }
    
    if(action.type === "GET_ACTIVE_ORDERS"){
        return {...state, active_orders: action.payload}
    }

    if (action.type === "GET_COMPLETED_ORDERS") {
        return { ...state, completed_orders: action.payload }
    }
    
    if(action.type === "GET_ORDER_ITEMS"){
        return {...state, order_items: action.payload}
    }
    
    if(action.type === "CLEAR_ORDER_ITEMS"){
        return {...state, order_items: []}
    }
    
    if (action.type === "GET_ORDER") {
        return {
            ...state, order_info: {
                ...state.order_info, payment_info:{
                    subtotal: parseInt(action.payload.subtotal),
                    payment: parseInt(action.payload.payment),
                    tip: parseInt(action.payload.tip),
                    total: parseInt(action.payload.total)
                }
            }
        }
    }
    
    if(action.type === "CLEAR_ORDER"){
        return {
            ...state, order_info: {}
        }
    }
    return state
}