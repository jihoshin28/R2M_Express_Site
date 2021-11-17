import authReducer from './authReducer'
import modalsReducer from './modalsReducer'
import itemsReducer from './itemsReducer'
import orderReducer from './ordersReducer'
import { reducer as formReducer} from 'redux-form'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'items', 'categories', 'stores', 'cart', 'order', 'modals']
}

const reducer = combineReducers({
    items: itemsReducer,
    auth: authReducer,
    modals: modalsReducer,
    order: orderReducer,
})


export default persistReducer(persistConfig, reducer)