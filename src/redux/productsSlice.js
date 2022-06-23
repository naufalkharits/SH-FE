import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { server } from "./api";

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId) => {
        const respone = await server.get(`/product/${productId}`);
        return respone.data;
    }
);
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category) => {
        const respone = await server.get(`/product?category=${category}`);
        return respone.data;
    }
);

export const insertProduct = createAsyncThunk(
    "products/insertProduct",
    async (formData) => {
        console.log(formData);
        const respone = await server.post("/product", formData);
        return respone.data;
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async (productId, formData) => {
        const respone = await server.put(`/product/${productId}`, formData);
        return respone.data;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        await server.delete(`/products/${id}`);
        return id;
    }
);

const productsAdapter = createEntityAdapter();

const productsSlice = createSlice({
    name: "products",
    initialState: productsAdapter.getInitialState({
        loading: "idle",
        error: "",
        keyword: "",
        category: "",
    }),
    reducers: {
        categoryQuery: (state, action) => {
            state.category = action.payload;
        },
        // editProduct: (state, action) => {
        //     const { id, name, price, image } = action.payload;
        //     const existingVehicle = state.find((product) => product.id === id);
        //     if (existingVehicle) {
        //         existingVehicle.name = name;
        //         existingVehicle.price = price;
        //         existingVehicle.image = image;
        //     }
        // },
        // deleteProduct: (state, action) => {
        //     const { id } = action.payload;
        //     const existingVehicle = state.find((product) => product.id === id);
        //     if (existingVehicle) {
        //         return state.filter((product) => product.id !== id);
        //     }
        // },
    },
    extraReducers: {
        // fetch productbyid
        [fetchProductById.pending]: (state) => {
            state.loading = "pending";
            state.error = "";
            productsAdapter.removeAll(state);
        },
        [fetchProductById.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.setOne(state, action.payload.product);
        },
        [fetchProductById.rejected]: (state) => {
            state.loading = "idle";
            state.error = "ERROR";
        },
        // fetch products
        [fetchProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = "";
            productsAdapter.removeAll(state);
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.setAll(state, action.payload.products);
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = "idle";
            state.error = "ERROR";
        },
        // insert product
        [insertProduct.pending]: (state) => {
            state.loading = "pending";
            productsAdapter.removeAll(state);
        },
        [insertProduct.fulfilled]: (state, action) => {
            state.loading = "idle";
            productsAdapter.addOne(state, action.payload);
        },
        // update product
        // [updateProduct.pending]: (state) => {
        //     state.loading = "pending";
        // },
        // [updateProduct.fulfilled]: (state, action) => {
        //     productsAdapter.updateOne(state, {
        //         id: action.payload.id,
        //         updates: action.payload,
        //     });
        //     state.loading = "idle";
        // },
        // update product
        // [deleteProduct.pending]: (state) => {
        //     state.loading = "pending";
        // },
        // [deleteProduct.fulfilled]: (state, action) => {
        //     productsAdapter.removeOne(state, action.payload);
        // },
    },
});

export const productsSelectors = productsAdapter.getSelectors(
    (state) => state.products
);

export const { categoryQuery } = productsSlice.actions;

export default productsSlice.reducer;
