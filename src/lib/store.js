import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counter'

const store = configureStore({
    reducer: {
        auth: authReducer, // Add your auth reducer to the store
        counter: counterReducer,
    },
});

export default store;