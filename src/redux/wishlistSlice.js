import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { server } from "./api";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// get wishlist buyer
export const getWishlistBuyer = createAsyncThunk(
    "wishlist/getWishlistBuyer",
    async () => {
        const response = await server.get('/wishlist', {
            headers: {
                Authorization: user.accessToken.token,
            },
        });
        return response.data;
    }
)

// get wishlist by id
export const getWishlistById = createAsyncThunk(
    "wishlist/getWishlistById",
    async (productId) => {
        const response = await server.get(`/wishlist/${productId}`, {
            headers: {
                Authorization: user.accessToken.token,
            },
        });
        return response.data
    }
)

// post wishlist buyer
export const addWishlistBuyer = createAsyncThunk(
    "wishlist/addWishlistBuyer",
    async ({ productId }) => {
        const response = await server.post(`/wishlist/${productId}`, {}, {
            headers: {
                Authorization: user.accessToken.token,
            },
        });
        window.location.reload()
        return response.data;
    }
);

// delete wishlist buyer
export const deleteWishlistBuyer = createAsyncThunk(
    "wishlist/deleteWishlistBuyer",
    async ({ productId }) => {
        const response = await server.delete(`/wishlist/${productId}`, {
            headers: {
                Authorization: user.accessToken.token,
            },
        });
        window.location.reload()
        return response.data;
    }
);

export const wishlistSlice = createSlice({
    name: "wishlists",
    initialState: {
        message: "",
        wishlists: null,
        isWishlist: false,
        loading: "idle",
        error: null,
    },
    reducers: {
    },
    extraReducers: {
        // addWishlistBuyer
        [addWishlistBuyer.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [addWishlistBuyer.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
        },
        [addWishlistBuyer.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
        // getWishlistBuyer
        [getWishlistBuyer.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [getWishlistBuyer.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.wishlists = action.payload.wishlists;
        },
        [getWishlistBuyer.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
        // getWishlistById
        [getWishlistById.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [getWishlistById.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.isWishlist = action.payload.isWishlist;
        },
        [getWishlistById.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
        // deleteWishlistBuyer
        [deleteWishlistBuyer.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [deleteWishlistBuyer.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.wishlists = null;
            state.message = action.payload.message;
        },
        [deleteWishlistBuyer.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export default wishlistSlice.reducer;
