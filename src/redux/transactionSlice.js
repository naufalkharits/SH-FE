import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    },
});

export default transactionSlice.reducer;
