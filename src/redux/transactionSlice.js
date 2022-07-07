import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import openServer from "../axios/openServer";
import closedServer from "../axios/closedServer";

// post TransactionTawar
export const addTransactionTawar = createAsyncThunk(
    "transaction/addTransactionTawar",
    async ({ productId, price }) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        const response = await closedServer.post(`/transaction/${productId}`, {
            price,
        });
        // window.location.reload()
        return response.data;
    }
);

// fetch all product
export const fetchTransactionTawar = createAsyncThunk(
    "transaction/fetchTransactionTawar",
    async ({ productId, price, offset }) => {
        const response = await openServer.get(
            `/transaction?productId=${productId}&price=${price}&limit=10&offset=${offset}`
        );
        return response.data;
    }
);

const transactionAdapter = createEntityAdapter();

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        data: null,
        loading: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: {
        // addTransactionTawar
        [addTransactionTawar.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
        },
        [addTransactionTawar.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.error = null;
            state.data = action.payload;
        },
        [addTransactionTawar.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // fetch all product
        [fetchTransactionTawar.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            transactionAdapter.removeAll(state);
        },
        [fetchTransactionTawar.fulfilled]: (state, action) => {
            state.loading = "idle";
            transactionAdapter.setAll(state, action.payload.products);
        },
        [fetchTransactionTawar.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const transactionSelectors = transactionAdapter.getSelectors(
    (state) => state.products
);

export default transactionSlice.reducer;
