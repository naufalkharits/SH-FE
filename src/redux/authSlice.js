import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { server } from "./api";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// refresh
export const refresh = createAsyncThunk("auth/refresh", async (thunkAPI) => {
    try {
        const response = await server.post("/auth/refresh", {
            refreshToken: user.refreshToken.token,
        });
        return response.data;
    } catch (error) {
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
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// register
export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, navigate }, thunkAPI) => {
        try {
            const response = await server.post("/auth/register", formValue);
            return response.data;
        } catch (error) {
            // console.log(error.response.data);
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
            return response.data;
        } catch (error) {
            // console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// update biodata
export const updateBiodata = createAsyncThunk(
    "biodata/updateBiodata",
    async ({ formData, navigate }) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        const response = await server.put(`/biodata`, formData, {
            headers: {
                Authorization: user.accessToken.token,
            },
        });
        navigate("/user");
        return response.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        decodedAccess: user ? jwtDecode(user.accessToken.token) : "",
        biodata: null,
        checkMe: null,
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
            state.error = null;
        },
        [refresh.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        [refresh.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // checkMe
        [me.pending]: (state) => {
            state.loading = "pending";
            state.biodata = null;
        },
        [me.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.checkMe = true;
            state.biodata = action.payload.user;
        },
        [me.rejected]: (state, action) => {
            state.loading = "idle";
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

        // update biodata
        [updateBiodata.pending]: (state) => {
            state.process = "pending";
            state.error = null;
            state.biodata = null
        },
        [updateBiodata.fulfilled]: (state, action) => {
            state.process = "idle";
            state.biodata = action.payload.updatedBiodata;
        },
        [updateBiodata.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
