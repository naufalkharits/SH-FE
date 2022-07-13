import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import closedServer from "../axios/closedServer";

// get wishlist buyer
export const getWishlistBuyer = createAsyncThunk(
    "wishlist/getWishlistBuyer",
    async (thunkAPI) => {
        try {
            const response = await closedServer.get("/wishlist");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// get wishlist by id
export const getWishlistById = createAsyncThunk(
    "wishlist/getWishlistById",
    async (productId, thunkAPI) => {
        try {
            const response = await closedServer.get(`/wishlist/${productId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// post wishlist buyer
export const addWishlistBuyer = createAsyncThunk(
    "wishlist/addWishlistBuyer",
    async ({ productId }, thunkAPI) => {
        try {
            const response = await closedServer.post(
                `/wishlist/${productId}`,
                {}
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// delete wishlist buyer
export const deleteWishlistBuyer = createAsyncThunk(
    "wishlist/deleteWishlistBuyer",
    async ({ productId }, thunkAPI) => {
        try {
            const response = await closedServer.delete(
                `/wishlist/${productId}`
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// get wishlist Seller
export const getWishlistSeller = createAsyncThunk(
    "wishlist/getWishlistSeller",
    async ({ as }, thunkAPI) => {
        try {
            const response = await closedServer.get(`/wishlist?as=${as}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const wishlistSlice = createSlice({
    name: "wishlists",
    initialState: {
        message: "",
        wishlists: null,
        sellerwishlists: null,
        isWishlist: false,
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: {
        // addWishlistBuyer
        [addWishlistBuyer.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [addWishlistBuyer.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.isWishlist = true;
        },
        [addWishlistBuyer.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
        // getWishlistBuyer
        [getWishlistBuyer.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.wishlists = null;
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
            state.isWishlist = false;
            state.message = action.payload.message;
        },
        [deleteWishlistBuyer.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
        // getWishlistSeller
        [getWishlistSeller.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            state.sellerwishlists = null;
        },
        [getWishlistSeller.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.sellerwishlists = action.payload.wishlists;
        },
        [getWishlistSeller.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export default wishlistSlice.reducer;
