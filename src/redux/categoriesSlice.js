import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import openServer from "../middlewares/axios/openServer"

// fetch all category
export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (thunkAPI) => {
  try {
    const { data } = await openServer.get("/category")
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    // fetch all category
    [fetchCategories.pending]: (state) => {
      state.loading = "pending"
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.categories = action.payload.categories
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },
  },
})

export default categoriesSlice.reducer
