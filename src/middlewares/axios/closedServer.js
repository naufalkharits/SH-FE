import axios from "axios"
import dayjs from "dayjs"
import { setUser, logout } from "../../redux/authSlice"

let store

export const injectClosedServer = (_store) => {
    store = _store
}

const baseURL = process.env.REACT_APP_SERVER_URL

const closedServer = axios.create({
    baseURL,
})

closedServer.interceptors.request.use(async (config) => {
    const isRefreshExpired =
        dayjs.unix(store.getState().auth.unixRefreshExp).diff(dayjs()) < 1
    const isAccessExpired =
        dayjs.unix(store.getState().auth.unixAccessExp).diff(dayjs()) < 1

    if (isRefreshExpired) {
        store.dispatch(logout())

        return config
    }

    if (isAccessExpired) {
        const response = await axios.post(`${baseURL}/auth/refresh`, {
            refreshToken: store.getState().auth.user.refreshToken.token,
        })

        store.dispatch(setUser(response.data))

        config.headers.Authorization = response.data.accessToken.token

        return config
    }

    config.headers.Authorization = store.getState().auth.user.accessToken.token

    return config
})

export default closedServer
