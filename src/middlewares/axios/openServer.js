import axios from "axios"
import dayjs from "dayjs"
import { setUser, logout } from "../../redux/authSlice"

let store

export const injectOpenServer = (_store) => {
    store = _store
}

const baseURL = process.env.REACT_APP_SERVER_URL

// export
const openServer = axios.create({
    baseURL,
})

openServer.interceptors.request.use(async (config) => {
    if (store.getState().auth.user) {
        const isRefreshExpired =
            dayjs.unix(store.getState().auth.unixRefreshExp).diff(dayjs()) < 1
        const isAccessExpired =
            dayjs.unix(store.getState().auth.unixAccessExp).diff(dayjs()) < 1

        if (isRefreshExpired) {
            // console.log(
            //     "Refresh expired: " +
            //         dayjs
            //             .unix(store.getState().auth.unixRefreshExp)
            //             .diff(dayjs())
            // );

            store.dispatch(logout())
            return config
        }

        if (isAccessExpired) {
            // console.log(
            //     "Access expired: " +
            //         dayjs
            //             .unix(store.getState().auth.unixAccessExp)
            //             .diff(dayjs())
            // );

            const response = await axios.post(`${baseURL}/auth/refresh`, {
                refreshToken: store.getState().auth.user.refreshToken.token,
            })

            store.dispatch(setUser(response.data))

            // console.log(
            //     "New access: " +
            //         dayjs
            //             .unix(store.getState().auth.unixAccessExp)
            //             .diff(dayjs())
            // );

            // console.log(response.data.accessToken.token);

            config.headers.Authorization = response.data.accessToken.token

            return config
        }

        // console.log("Not expired!!");
        return config
    }

    // console.log("User not login");
    return config
})

export default openServer
