import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { server } from "./api";

const user = JSON.parse(localStorage.getItem("user"));
const page = JSON.parse(localStorage.getItem("page"));

// fetch all category
export const fetchCategories = createAsyncThunk(
    "products/fetchCategories",
    async () => {
        const { data } = await server.get("/category");
        return data;
    }
);

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
    async ({ formData, process, navigate }) => {
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        const respone = await server.post("/product", formData, {
            headers: {
                Authorization: user.accessToken,
            },
        });
        if (process === "idle") navigate("/manage-product");
        return respone.data;
    }
);

// update product
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ productId, formData, process, navigate }) => {
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
        }
        const respone = await server.put(`/product/${productId}`, formData, {
            headers: {
                Authorization: user.accessToken,
            },
        });
        if (process === "idle") navigate("/manage-product");
        return respone.data;
    }
);

// delete product
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async ({ productId, process, navigate }) => {
        await server.delete(`/product/${productId}`, {
            headers: {
                Authorization: user.accessToken,
            },
        });
        if (process === "idle") navigate("/manage-product");
        return productId;
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
        },
        resetPageOffset: (state, action) => {
            state.offset = 0;
            localStorage.setItem("page", JSON.stringify(0));
        },
    },
    extraReducers: {
        // fetch all category
        [fetchCategories.pending]: (state) => {
            // state.loading = "pending";
            // state.error = null;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            // state.loading = "idle";
            state.categories = action.payload.categories;
        },
        [fetchCategories.rejected]: (state, action) => {
            // state.loading = "idle";
            // state.error = action.payload;
        },

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
            state.process = "pending";
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [insertProduct.fulfilled]: (state, action) => {
            state.process = "idle";
            productsAdapter.addOne(state, action.payload.product);
        },
        [insertProduct.rejected]: (state, action) => {
            state.process = "idle";
            state.error = action.payload;
        },

        // update product
        [updateProduct.pending]: (state) => {
            state.process = "pending";
            state.error = null;
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
            state.error = null;
            productsAdapter.removeAll(state);
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.process = "idle";
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
