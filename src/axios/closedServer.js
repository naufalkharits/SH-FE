import axios from "axios";
import dayjs from "dayjs";
import { setUser, logout } from "../redux/authSlice";

let store;

export const injectClosedServer = (_store) => {
    store = _store;
};

const baseURL = process.env.REACT_APP_SERVER_URL;

// export
const closedServer = axios.create({
    baseURL,
});

closedServer.interceptors.request.use(async (config) => {
    const isRefreshExpired =
        dayjs(store.getState().auth.unixRefreshExp).diff(dayjs()) < 1;
    const isAccessExpired =
        dayjs(store.getState().auth.unixAccessExp).diff(dayjs()) < 1;

    if (isRefreshExpired) {
        store.dispatch(logout());
        return config;
    }

    if (!isAccessExpired) {
        config.headers.Authorization =
            store.getState().auth.user.accessToken.token;
        return config;
    }

    if (isAccessExpired) {
        const response = await axios.post(`${baseURL}/auth/refresh`, {
            refreshToken: store.getState().auth.user.refreshToken.token,
        });
        config.headers.Authorization =
            store.getState().response.data.accessToken.token;
        store.dispatch(setUser(response.data));
        return config;
    }

    return config;
});

export default closedServer;
