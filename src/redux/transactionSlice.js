import {
    createAsyncThunk,
    createSlice,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import closedServer from "../axios/closedServer";

// post TransactionTawar
export const addTransactionTawar = createAsyncThunk(
    "transaction/addTransactionTawar",
    async ({ productId, price }, thunkAPI) => {
        // for (const pair of formData.entries()) {
        //     console.log(`${pair[0]}, ${pair[1]}`);
        // }
        try {
            const response = await closedServer.post(
                `/transaction/${productId}`,
                {
                    price,
                }
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// GET transaction by id
export const getTransactionById = createAsyncThunk(
    "transaction/getTransactionById",
    async (id, thunkAPI) => {
        try {
            const response = await closedServer.get(`/transaction/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// GET all transaction
export const fetchTransactionTawar = createAsyncThunk(
    "transaction/fetchTransactionTawar",
    async ({ status, as }, thunkAPI) => {
        try {
            const response = await closedServer.get(
                `/transaction?status=${status}&as=${as}`
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// update status transaction
export const updateTransactionTawar = createAsyncThunk(
    "transaction/updateTransactionTawar",
    async ({ id, status, price }, thunkAPI) => {
        try {
            const response = await closedServer.put(`/transaction/${id}`, {
                status,
                price,
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// GET filtered transaction
export const getFilteredTransaction = createAsyncThunk(
    "transaction/getFilteredTransaction",
    async ({ status, as, productId }, thunkAPI) => {
        try {
            const response = await closedServer.get(
                `/transaction?status=${status}&as=${as}`
            );
            // console.log(
            //     response.data.transactions.filter(
            //         (tx) => tx.product.id === Number(productId)
            //     )
            // );
            return response.data.transactions.filter(
                (tx) =>
                    tx.product.id === Number(productId) &&
                    tx.status === "PENDING"
            );
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const transactionAdapter = createEntityAdapter();

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: transactionAdapter.getInitialState({
        data: null,
        txById: null,
        filteredTx: null,
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

        // GET transaction by product id
        [getTransactionById.pending]: (state) => {
            state.loading = "pending";
        },
        [getTransactionById.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.txById = action.payload.transaction;
        },
        [getTransactionById.rejected]: (state, action) => {
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

        // GET filtered transaction
        [getFilteredTransaction.pending]: (state) => {
            state.loading = "pending";
        },
        [getFilteredTransaction.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.filteredTx = action.payload;
        },
        [getFilteredTransaction.rejected]: (state, action) => {
            state.loading = "idle";
            state.error = action.payload;
        },

        // PUT TransactionTawar
        [updateTransactionTawar.pending]: (state) => {
            state.loading = "pending";
            state.spinner = true;
        },
        [updateTransactionTawar.fulfilled]: (state, action) => {
            state.loading = "idle";
            state.spinner = false;
            transactionAdapter.updateOne(state, {
                id: action.payload.updatedtransaction.id,
                updates: action.payload.updatedtransaction,
            });
        },
        [updateTransactionTawar.rejected]: (state, action) => {
            state.loading = "idle";
            state.spinner = false;
            state.error = action.payload || "SOMETHING WRONG!!";
        },
    },
});

export const transactionSelectors = transactionAdapter.getSelectors(
    (state) => state.transaction
);

export default transactionSlice.reducer;
