import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { server, closedServer } from "./api";

const page = JSON.parse(localStorage.getItem("page"));

// fetch product by id
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId) => {
        const respone = await server.get(`/product/${productId}`);
        return respone.data;
    }
);

// fetch all product
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({ keyword, category, offset }) => {
        const respone = await server.get(
            `/product?keyword=${keyword}&category=${category}&limit=10&offset=${offset}`
        );
        return respone.data;
    }
);

// insert product
export const insertProduct = createAsyncThunk(
    "products/insertProduct",
    async ({ formData, loading, navigate }) => {
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        const respone = await closedServer.post("/product", formData);
        return respone.data.then(navigate("/manage-product"));
    }
);

// update product
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ productId, formData, loading, navigate }) => {
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        const respone = await closedServer.put(`/product/${productId}`, formData);
        return respone.data.then(navigate("/manage-product"));
    }
);

// delete product
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        await closedServer.delete(`/product/${id}`);
        return id;
    }
);

const productsAdapter = createEntityAdapter();

const productsSlice = createSlice({
    name: "products",
    initialState: productsAdapter.getInitialState({
        loading: "idle",
        error: null,
        keyword: "",
        category: "",
        offset: page ? page : 0,
    }),
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        keywordQuery: (state, action) => {
            state.keyword = action.payload;
        },
        categoryQuery: (state, action) => {
            state.category = action.payload;
        },
        setOffsetIncrement: (state, action) => {
            state.offset = state.offset + action.payload;
            localStorage.setItem("page", JSON.stringify(state.offset));
        },
        setOffsetDecrement: (state, action) => {
            state.offset = state.offset - action.payload;
            localStorage.setItem("page", JSON.stringify(state.offset));
        }
    },
    extraReducers: {
        // fetch product by id
        [fetchProductById.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [fetchProductById.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.setOne(state, action.payload.product);
        },
        [fetchProductById.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // fetch all product
        [fetchProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.setAll(state, action.payload.products);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // insert product
        [insertProduct.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [insertProduct.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.addOne(state, action.payload.product);
        },
        [insertProduct.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // update product
        [updateProduct.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [updateProduct.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.updateOne(state, {
                id: action.payload.updatedProduct.id,
                updates: action.payload.updatedProduct,
            });
        },
        [updateProduct.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // delete product
        [deleteProduct.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [deleteProduct.fulfilled]: (state, action) => {
            productsAdapter.removeOne(state, action.payload);
        },
        [deleteProduct.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const productsSelectors = productsAdapter.getSelectors(
    (state) => state.products
);

export const { setLoading, keywordQuery, categoryQuery, setOffsetIncrement, setOffsetDecrement } =
    productsSlice.actions;

export default productsSlice.reducer;
