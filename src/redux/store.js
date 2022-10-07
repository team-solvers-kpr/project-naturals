import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['products'],
}

// 1. create reducers
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 2. create store
const store = configureStore({
    reducer: persistedReducer
})
setupListeners(store.dispatch)
export default store