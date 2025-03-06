import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    email: string;
    role: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;

};

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User; token: string}>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;

        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
    }
    
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;