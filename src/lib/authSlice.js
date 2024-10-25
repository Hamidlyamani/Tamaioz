// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    name: 'auth',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = {
                id: action.payload.uid, // Store user ID
                name: action.payload.email, // Store user name (if available)
            };
        },
        loginFailure: (state, action) => {
            state.error = action.payload.error;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
});

export default authSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
