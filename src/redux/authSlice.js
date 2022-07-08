import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import openServer from "../axios/openServer";
import closedServer from "../axios/closedServer";
import dayjs from "dayjs";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// refresh
// export const refresh = createAsyncThunk("auth/refresh", async (thunkAPI) => {
//     try {
//         const response = await closedServer.post("/auth/refresh");
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

// checkMe
export const me = createAsyncThunk("auth/me", async (accessToken, thunkAPI) => {
    try {
        const response = await closedServer.get("/auth/me");
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
            const response = await openServer.post("/auth/register", formValue);
            return response.data;
        } catch (error) {
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
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// get biodata
export const getBiodata = createAsyncThunk(
    "biodata/getBiodata",
    async (userId) => {
        const response = await openServer.get(`/biodata/${userId}`);
        return response.data;
    }
);

// update biodata
export const updateBiodata = createAsyncThunk(
    "biodata/updateBiodata",
    async ({ formData, navigate }) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        const response = await closedServer.put(`/biodata`, formData);
        navigate("/user");
        return response.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        unixRefreshExp: dayjs(user?.refreshToken.exp).unix(),
        unixAccessExp: dayjs(user?.accessToken.exp).unix(),
        isRefreshExp: dayjs.unix(user?.refreshToken.exp).diff(dayjs()) < 1,
        isAccessExp: dayjs.unix(user?.accessToken.exp).diff(dayjs()) < 1,
        biodata: null,
        loading: "idle",
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        logout: (state, action) => {
            localStorage.removeItem("user");
            state.user = null;
            state.biodata = null;
            state.decodedAccess = null;
            state.decodedRefresh = null;
        },
    },
    extraReducers: {
        // refresh
        // [refresh.pending]: (state) => {
        //     state.loading = "pending";
        //     state.error = null;
        // },
        // [refresh.fulfilled]: (state, action) => {
        //     state.loading = "idle";
        //     state.error = null;
        //     localStorage.setItem("user", JSON.stringify(action.payload));
        //     state.user = action.payload;
        // },
        // [refresh.rejected]: (state, action) => {
        //     state.loading = "idle";
        //     state.error = action.payload;
        // },

        // checkMe
        [me.pending]: (state) => {
            state.loading = "pending";
            state.biodata = null;
        },
        [me.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.biodata = action.payload.user;
        },
        [me.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
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
            state.decodedAccess = jwtDecode(action.payload.accessToken.token);
            state.decodedRefresh = jwtDecode(action.payload.refreshToken.token);
        },
        [login.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // get biodata
        [getBiodata.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.biodata = null;
        },
        [getBiodata.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.biodata = action.payload.biodata;
        },
        [getBiodata.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // update biodata
        [updateBiodata.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.biodata = null;
        },
        [updateBiodata.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.biodata = action.payload.updatedBiodata;
        },
        [updateBiodata.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
