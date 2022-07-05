import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import openServer from "../utils/openServer";
import closedServer from "../utils/closedServer";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// refresh
// export const refresh = createAsyncThunk("auth/refresh", async (thunkAPI) => {
//     try {
//         const response = await openServer.post("/auth/refresh", {
//             refreshToken: user.refreshToken.token,
//         });
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
            const response = await openServer.post("/auth/login", formValue);
            return response.data;
        } catch (error) {
            // console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// get biodata
export const getBiodata = createAsyncThunk(
    "biodata/getBiodata",
    async ( userId ) => {
        const response = await openServer.get(`/biodata/${userId}`);
        // navigate("/user");
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
        decodedAccess: user ? jwtDecode(user.accessToken.token) : null,
        decodedRefresh: user ? jwtDecode(user.refreshToken.token) : null,
        // accessExp: user
        //     ? Date.now() > new Date(decodedAccess * 1000 - 30 * 1000)
        //         ? true
        //         : false
        //     : null,
        // refreshExp: user
        //     ? Date.now() > new Date(decodedRefresh * 1000 - 60 * 1000)
        //         ? true
        //         : false
        //     : null,
        biodata: null,
        loading: "idle",
        error: null,
    },
    reducers: {
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
            state.process = "pending";
            state.error = null;
            state.biodata = null;
        },
        [getBiodata.fulfilled]: (state, action) => {
            state.process = "idle";
            state.biodata = action.payload.biodata;
        },
        [getBiodata.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },

        // update biodata
        [updateBiodata.pending]: (state) => {
            state.process = "pending";
            state.error = null;
            state.biodata = null;
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
