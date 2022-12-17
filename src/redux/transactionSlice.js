import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import closedServer from "../middlewares/axios/closedServer"
import openServer from "../middlewares/axios/openServer"

// POST transaction
export const postTransaction = createAsyncThunk(
  "transaction/postTransaction",
  async ({ productId, price }, thunkAPI) => {
    try {
      const response = await closedServer.post(`/transaction/${productId}`, {
        price,
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// GET transaction by id
export const getTransactionById = createAsyncThunk(
  "transaction/getTransactionById",
  async (id, thunkAPI) => {
    try {
      const response = await closedServer.get(`/transaction/${id}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// GET all transactions
export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async ({ status, as }, thunkAPI) => {
    try {
      const response = await closedServer.get(`/transaction?status=${status}&as=${as}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// PUT status transaction
export const putTransaction = createAsyncThunk(
  "transaction/putTransaction",
  async ({ id, status, price }, thunkAPI) => {
    try {
      const response = await closedServer.put(`/transaction/${id}`, {
        status,
        price,
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

// createInvoice
export const createInvoice = createAsyncThunk(
  "transaction/createInvoice",
  async ({ external_id, amount, email, mobile_number, redirect_url }, thunkAPI) => {
    const invoiceData = {
      external_id,
      amount,
      email,
      mobile_number,
      redirect_url,
    }
    try {
      const response = await openServer.post("/payment/invoice", invoiceData)
      window.location.replace(`${response.data.invoice.invoice_url}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const getFilteredTransaction = createAsyncThunk(
  "transaction/getFilteredTransaction",
  async ({ status, as, productId }, thunkAPI) => {
    try {
      const response = await closedServer.get(`/transaction?status=${status}&as=${as}`)
      return response.data.transactions.filter(
        (tx) =>
          tx.product.id === Number(productId) &&
          (tx.status === "PENDING" || tx.status === "ACCEPTED")
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const transactionAdapter = createEntityAdapter()

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: transactionAdapter.getInitialState({
    invoiceUrl: {},
    txById: null,
    filteredTx: null,
    addedTx: null,
    updatedTx: null,
    isModalOn: false,
    isModalCourierOn: false,
    modalOn: false,
    loading: "idle",
    spinner: false,
    error: null,
    showError: false,
  }),
  reducers: {
    setShowTransactionError: (state, action) => {
      state.showError = action.payload
    },
    setIsModalOn: (state, action) => {
      state.isModalOn = action.payload
    },
    modalOn: (state, action) => {
      state.modalOn = action.payload
    },
    setIsModalCourierOn: (state, action) => {
      state.isModalCourierOn = action.payload
    },
  },
  extraReducers: {
    // POST transaction
    [postTransaction.pending]: (state) => {
      state.loading = "pending"
      state.spinner = true
      state.error = null
    },
    [postTransaction.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.spinner = false
      state.error = null
      state.addedTx = action.payload
      state.isModalOn = false
    },
    [postTransaction.rejected]: (state, action) => {
      state.loading = "idle"
      state.spinner = false
      state.error = action.payload
      state.showError = true
    },

    // GET transaction by product id
    [getTransactionById.pending]: (state) => {
      state.loading = "pending"
    },
    [getTransactionById.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.txById = action.payload.transaction
    },
    [getTransactionById.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },

    // GET all transactions
    [getTransactions.pending]: (state) => {
      state.loading = "pending"
      state.error = null
      transactionAdapter.removeAll(state)
    },
    [getTransactions.fulfilled]: (state, action) => {
      state.loading = "idle"
      transactionAdapter.setAll(state, action.payload.transactions)
    },
    [getTransactions.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },

    // createInvoice
    [createInvoice.pending]: (state) => {
      state.loading = "pending"
    },
    [createInvoice.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.isModalCourierOn = false
      state.invoiceUrl = action.payload
    },
    [createInvoice.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },

    // GET filtered transaction
    [getFilteredTransaction.pending]: (state) => {
      state.loading = "pending"
    },
    [getFilteredTransaction.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.filteredTx = action.payload
    },
    [getFilteredTransaction.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },

    // PUT status transaction
    [putTransaction.pending]: (state) => {
      state.loading = "pending"
      state.spinner = true
    },
    [putTransaction.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.spinner = false
      transactionAdapter.updateOne(state, {
        id: action.payload.updatedTransaction.id,
        updates: action.payload.updatedTransaction,
      })
      state.updatedTx = action.payload.updatedTransaction
      state.isModalOn = false
      if (action.payload.updatedTransaction.status === "ACCEPTED") {
        state.modalOn = true
      }
    },
    [putTransaction.rejected]: (state, action) => {
      state.loading = "idle"
      state.spinner = false
      state.error = action.payload || "SOMETHING WRONG!!"
    },
  },
})

export const transactionSelectors = transactionAdapter.getSelectors((state) => state.transaction)

export const { setIsModalOn, modalOn, setIsModalCourierOn, setShowTransactionError } =
  transactionSlice.actions

export default transactionSlice.reducer
