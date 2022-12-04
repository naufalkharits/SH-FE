import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import openServer from "../middlewares/axios/openServer"

export const getProvinces = createAsyncThunk("courier/getProvinces", async (thunkAPI) => {
  try {
    const response = await openServer.get("/courier/province")
    return response.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data)
  }
})

export const getCities = createAsyncThunk("courier/getCities", async (provinceId, thunkAPI) => {
  try {
    const response = await openServer.post("/courier/city", { provinceId })
    return response.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data)
  }
})

export const courierSlice = createSlice({
  name: "courier",
  initialState: {
    provinces: {},
    cities: {},
    loading: "idle",
  },
  reducers: {},
  extraReducers: {
    [getProvinces.pending]: (state) => {
      state.loading = "pending"
    },
    [getProvinces.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.provinces = action.payload.rajaongkir.results
    },
    [getProvinces.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },
    [getCities.pending]: (state) => {
      state.loading = "pending"
    },
    [getCities.fulfilled]: (state, action) => {
      state.loading = "idle"
      state.cities = action.payload.rajaongkir.results
    },
    [getCities.rejected]: (state, action) => {
      state.loading = "idle"
      state.error = action.payload
    },
  },
})

export default courierSlice.reducer
