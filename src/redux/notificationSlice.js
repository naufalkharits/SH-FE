import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit"
import closedServer from "../middlewares/axios/closedServer"

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

export const putNotificationById = createAsyncThunk(
    "notification/putNotificationById",
    async ({ id, read }, thunkAPI) => {
        try {
            const response = await closedServer.put(`/notification/${id}`, {
                read,
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const putNotification = createAsyncThunk(
    "notification/putNotification",
    async (thunkAPI) => {
        try {
            const response = await closedServer.put("/notification")
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
        filteredNotification: null,
        updatedNotif: null,
        readAll: null,
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
            state.filteredNotification = action.payload.notifications.filter(
                (notif) => notif?.read === false
            )
        },
        [getNotification.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },

        [putNotification.pending]: (state) => {
            state.loading = "pending"
        },
        [putNotification.fulfilled]: (state, action) => {
            state.loading = "idle"
            state.readAll = action.payload.message
        },
        [putNotification.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },

        [putNotificationById.pending]: (state) => {
            state.loading = "pending"
        },
        [putNotificationById.fulfilled]: (state, action) => {
            state.loading = "idle"
            notificationAdapter.updateOne(state, {
                id: action.payload.updatedNotification.id,
                updates: action.payload.updatedNotification,
            })
            state.updatedNotif = action.payload.updatedNotification
        },
        [putNotificationById.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },
    },
})

export const notificationSelectors = notificationAdapter.getSelectors(
    (state) => state.notification
)

export default notificationSlice.reducer
