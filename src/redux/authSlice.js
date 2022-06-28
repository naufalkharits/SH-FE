import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "./api";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// refresh
export const refresh = createAsyncThunk("auth/refresh", async (thunkAPI) => {
    try {
        const response = await server.post("/auth/refresh", {
            refreshToken: user.refreshToken,
        });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// checkMe
export const me = createAsyncThunk("auth/me", async (accessToken, thunkAPI) => {
    try {
        const response = await server.get("/auth/me", {
            headers: {
                Authorization: accessToken,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const response = await server.post("/auth/register", formValue);
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
            const response = await server.post("/auth/login", formValue);
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
        checkMe: true,
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
        // refresh
        [refresh.pending]: (state) => {
            state.loading = "pending";
            state.errorRefresh = null;
        },
        [refresh.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        [refresh.rejected]: (state, action) => {
            state.loading = "idle";
            state.errorRefresh = action.payload;
        },

        // checkMe
        [me.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [me.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.checkMe = true;
        },
        [me.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
            state.checkMe = false;
        },

        // register
        [register.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
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
