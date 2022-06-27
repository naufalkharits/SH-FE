import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openServer } from "./api";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const response = await openServer.post("/auth/register", formValue);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// login
export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const response = await openServer.post("/auth/login", formValue);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        loading: "idle",
        error: null,
    },
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("user");
            state.user = null;
        },
    },
    extraReducers: {
        // register
        [register.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        [register.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // login
        [login.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = "idle";
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
