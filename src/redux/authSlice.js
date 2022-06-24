import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "./api";

// register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const response = await server.post("/auth/register", formValue);
            return response.data.then(navigate("/"));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// login
export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, toast, navigate }, thunkAPI) => {
        try {
            const response = await server.post("/auth/login", formValue);
            toast.success("Login Successfully");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: "idle",
        error: "",
    },
    // reducers: {},
    extraReducers: {
        // login
        [login.pending]: (state) => {
            state.loading = "pending";
            state.error = "";
        },
        [login.fulfilled]: (state, action) => {
            state.loading = "idle";
            // localStorage.setItem(
            //     "profile",
            //     JSON.stringify({ ...action.payload })
            // );
            state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload.message;
        },
        // register
        [register.pending]: (state) => {
            state.loading = "pending";
            state.error = "";
        },
        [register.fulfilled]: (state, action) => {
            state.loading = "idle";
            // localStorage.setItem(
            //     "profile",
            //     JSON.stringify({ ...action.payload })
            // );
            state.user = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload.message;
        },
    },
});

export default authSlice.reducer;
