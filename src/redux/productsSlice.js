import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { server } from "./api";
import { storage } from "./firebase";

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (productId) => {
        const respone = await server.get(`/product/${productId}`);
        return respone.data;
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
    "products/insertProduct",
    async ({ name, price, category, description, pictures }) => {
        console.log(name);
        console.log(price);
        console.log(category);
        console.log(description);
        console.log(pictures);

        // firebase setup
        // const imageRef = ref(storage, "");

        // firebase upload
        // await uploadBytes(imageRef, image).then((snapshot) => {
        // firebase get uploaded url
        // getDownloadURL(snapshot.ref).then(async (url) => {
        // upload to database
        const respone = await server.post("/product", {
            name,
            price,
            category,
            description,
            pictures,
        });
        return respone.data;
        // });
        // });
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ productId, name, price }) => {
        const respone = await server.put(`/products/${productId}`, {
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
        addProduct: (state, action) => {
            state.push(action.payload);
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
        },
        [fetchProductById.fulfilled]: (state, action) => {
            productsAdapter.setOne(state, action.payload.product);
            state.loading = "idle";
        },
        [fetchProductById.rejected]: (state) => {
            state.loading = "idle";
            state.error = "ERROR";
        },
        // fetch products
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
        [insertProduct.pending]: (state) => {
            state.loading = "pending";
        },
        [insertProduct.fulfilled]: (state, action) => {
            productsAdapter.addOne(state, action.payload);
            state.loading = "idle";
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

export default productsSlice.reducer;
