import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit"
import closedServer from "../axios/closedServer"

export const getNotification = createAsyncThunk(
    "notification/getNotification",
    async (thunkAPI) => {
        try {
            const response = await closedServer.get("/notification")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const notificationAdapter = createEntityAdapter()

export const notificationSlice = createSlice({
    name: "notification",
    initialState: notificationAdapter.getInitialState({
        loading: "idle",
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [getNotification.pending]: (state) => {
            state.loading = "pending"
            notificationAdapter.removeAll(state)
        },
        [getNotification.fulfilled]: (state, action) => {
            state.loading = "idle"
            notificationAdapter.setAll(state, action.payload.notifications)
        },
        [getNotification.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },
    },
})

export const notificationSelectors = notificationAdapter.getSelectors(
    (state) => state.notification
)

export default notificationSlice.reducer
