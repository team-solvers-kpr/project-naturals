import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import allNaturalProductReducer from './allNaturalProductSlice';
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
    products: allNaturalProductReducer,
    cart: cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 2. create store
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

setupListeners(store.dispatch)
export default store