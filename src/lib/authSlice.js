// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload.uid ;
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
