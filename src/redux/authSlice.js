import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import openServer from "../axios/openServer";
import closedServer from "../axios/closedServer";

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
    async (userId, thunkAPI) => {
        try {
            const response = await openServer.get(`/biodata/${userId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// update biodata
export const updateBiodata = createAsyncThunk(
    "biodata/updateBiodata",
    async ({ formData, navigate, location }, thunkAPI) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        try {
            const response = await closedServer.put(`/biodata`, formData);
            navigate(location.state?.from?.pathname || "/user");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        decodedRefresh: user ? jwtDecode(user.refreshToken.token) : null,
        decodedAccess: user ? jwtDecode(user.accessToken.token) : null,
        unixRefreshExp: user ? dayjs(user.refreshToken.expiredAt).unix() : null,
        unixAccessExp: user ? dayjs(user.accessToken.expiredAt).unix() : null,
        profile: null,
        bio: null,
        loading: "idle",
        error: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = null;
        },
        setUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
            state.unixRefreshExp = dayjs(
                action.payload.refreshToken.expiredAt
            ).unix();
            state.unixAccessExp = dayjs(
                action.payload.accessToken.expiredAt
            ).unix();
        },
        logout: (state, action) => {
            localStorage.removeItem("user");
            state.user = null;
            state.biodata = null;
            state.decodedAccess = null;
            state.decodedRefresh = null;
            state.unixRefreshExp = null;
            state.unixAccessExp = null;
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
            state.profile = null;
        },
        [me.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.profile = action.payload.user;
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
            state.decodedAccess = jwtDecode(action.payload.accessToken.token);
            state.decodedRefresh = jwtDecode(action.payload.refreshToken.token);
            state.unixRefreshExp = dayjs(
                action.payload.refreshToken.expiredAt
            ).unix();
            state.unixAccessExp = dayjs(
                action.payload.accessToken.expiredAt
            ).unix();
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
            state.unixRefreshExp = dayjs(
                action.payload.refreshToken.expiredAt
            ).unix();
            state.unixAccessExp = dayjs(
                action.payload.accessToken.expiredAt
            ).unix();
        },
        [login.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // get biodata
        [getBiodata.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.bio = null;
        },
        [getBiodata.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.bio = action.payload.biodata;
        },
        [getBiodata.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // update biodata
        [updateBiodata.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.bio = null;
        },
        [updateBiodata.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.bio = action.payload.updatedBiodata;
        },
        [updateBiodata.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const { resetError, setUser, logout } = authSlice.actions;

export default authSlice.reducer;
