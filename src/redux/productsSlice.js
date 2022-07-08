import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import openServer from "../axios/openServer";
import closedServer from "../axios/closedServer";

const params = new URLSearchParams(document.location.search);
const page = Number(params.get("page"));
const offset = Number(params.get("offset"));

// fetch product by id
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId, thunkAPI) => {
        try {
            const response = await openServer.get(`/product/${productId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// fetch all product
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ keyword, category, offset }, thunkAPI) => {
        try {
            const response = await openServer.get(
                `/product?keyword=${keyword}&category=${category}&limit=10&offset=${offset}`
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// insert product
export const insertProduct = createAsyncThunk(
    "products/insertProduct",
    async ({ formData, process, navigate }, thunkAPI) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        try {
            const response = await closedServer.post("/product", formData);
            if (process === "idle") navigate("/manage-product");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// update product
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ productId, formData, process, navigate }, thunkAPI) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        try {
            const response = await closedServer.put(
                `/product/${productId}`,
                formData
            );
            navigate("/manage-product");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// delete product
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async ({ productId, process, navigate }, thunkAPI) => {
        try {
            await closedServer.delete(`/product/${productId}`);
            navigate("/manage-product");
            return productId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const productsAdapter = createEntityAdapter();

const productsSlice = createSlice({
    name: "products",
    initialState: productsAdapter.getInitialState({
        categories: null,
        loading: "idle",
        process: "idle",
        error: null,
        keyword: "",
        category: "",
        offset: page ? (offset ? offset : 0) : 0,
    }),
    reducers: {
        // setLoading: (state, action) => {
        //     state.loading = action.payload;
        // },
        keywordQuery: (state, action) => {
            state.keyword = action.payload;
        },
        categoryQuery: (state, action) => {
            state.category = action.payload;
        },
        setOffsetIncrement: (state, action) => {
            state.offset = state.offset + action.payload;
        },
        setOffsetDecrement: (state, action) => {
            state.offset = state.offset - action.payload;
        },
        resetPageOffset: (state, action) => {
            state.offset = 0;
        },
    },
    extraReducers: {
        // fetch product by id
        [fetchProductById.pending]: (state) => {
            state.loading = "pending";
            productsAdapter.removeAll(state);
        },
        [fetchProductById.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            productsAdapter.setOne(state, action.payload.product);
        },
        [fetchProductById.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // fetch all product
        [fetchProducts.pending]: (state) => {
            state.loading = "pending";
            productsAdapter.removeAll(state);
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            productsAdapter.setAll(state, action.payload.products);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // insert product
        [insertProduct.pending]: (state) => {
            state.process = "pending";
            productsAdapter.removeAll(state);
        },
        [insertProduct.fulfilled]: (state, action) => {
            state.process = "idle";
            state.error = null;
            productsAdapter.addOne(state, action.payload.product);
        },
        [insertProduct.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },

        // update product
        [updateProduct.pending]: (state) => {
            state.process = "pending";
            productsAdapter.removeAll(state);
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.process = "idle";
            productsAdapter.addOne(state, action.payload.updatedProduct);
        },
        [updateProduct.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },

        // delete product
        [deleteProduct.pending]: (state) => {
            state.process = "pending";
            productsAdapter.removeAll(state);
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.process = "idle";
            state.error = null;
            productsAdapter.removeOne(state, action.payload);
        },
        [deleteProduct.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },
    },
});

export const productsSelectors = productsAdapter.getSelectors(
    (state) => state.products
);

export const {
    setLoading,
    keywordQuery,
    categoryQuery,
    setOffsetIncrement,
    setOffsetDecrement,
    resetPageOffset,
} = productsSlice.actions;

export default productsSlice.reducer;
