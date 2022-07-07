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

// fetch all transaction
export const fetchTransactionTawar = createAsyncThunk(
    "transaction/fetchTransactionTawar",
    async ({ status, as }) => {
        const response = await closedServer.get(
            `/transaction?status=${status}&as=${as}`
        );
        return response.data;
    }
);

const transactionAdapter = createEntityAdapter();

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: transactionAdapter.getInitialState ({
        data: null,
        loading: "idle",
        error: null,
    }),
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

        // fetch all transaction
        [fetchTransactionTawar.pending]: (state) => {
            state.loading = "pending";
            state.error = null;
            transactionAdapter.removeAll(state);
        },
        [fetchTransactionTawar.fulfilled]: (state, action) => {
            state.loading = "idle";
            transactionAdapter.setAll(state, action.payload.transactions);
        },
        [fetchTransactionTawar.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },
    },
});

export const transactionSelectors = transactionAdapter.getSelectors(
    (state) => state.transaction
);

export default transactionSlice.reducer;
