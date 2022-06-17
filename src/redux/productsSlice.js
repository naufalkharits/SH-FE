import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { server } from "./api";

export const uploadImage = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const respone = await server.get("/products");
            return respone.data;
        } catch (error) {
            return error;
        }
    }
);

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const respone = await server.get("/product");
        return respone.data;
    }
);

export const insertProduct = createAsyncThunk(
    "products/saveProduct",
    async ({ name, seat, color, year, price, description, image }) => {
        console.log(image);
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "nvqdlovn");
        const respone = await server.post(formData).then(async (respone) => {
            console.log(respone.data.secure_url);
            await server.post("/products", {
                name,
                seat,
                color,
                year,
                price,
                description,
                image: respone.data.secure_url,
            });
        });
        return respone.data;
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ vehicleId, name, price }) => {
        const respone = await server.put(`/products/${vehicleId}`, {
            name,
            price,
        });
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
    }),
    reducers: {
        // addProduct: (state, action) => {
        //     state.push(action.payload);
        // },
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
        // fetch product
        [fetchProducts.pending]: (state) => {
            state.loading = "pending";
            state.error = "";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            productsAdapter.setAll(state, action.payload.products);
            state.loading = "idle";
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = "idle";
            state.error = "ERROR";
        },
        // insert product
        // [insertProduct.pending]: (state) => {
        //     state.loading = "pending";
        // },
        // [insertProduct.fulfilled]: (state, action) => {
        //     productsAdapter.addOne(state, action.payload);
        //     state.loading = "idle";
        // },
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

export default productsSlice.reducer;
