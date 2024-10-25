import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage by default

const rootReducer = combineReducers({
    auth: authReducer,
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer, // Use persistedReducer instead of rootReducer
});

const persistor = persistStore(store);

export { store, persistor };