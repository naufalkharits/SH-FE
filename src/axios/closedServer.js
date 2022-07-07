import axios from "axios";
import dayjs from "dayjs";
import { setUser, logout } from "../redux/authSlice";

let store;

export const injectStore = (_store) => {
    store = _store;
};

const baseURL = process.env.REACT_APP_SERVER_URL;

// export
const closedServer = axios.create({
    baseURL,
});

closedServer.interceptors.request.use(async (config) => {
    const refreshToken = store.getState().auth.user.refreshToken.token;
    const decodedRefresh = store.getState().auth.decodedRefresh.exp;
    const accessToken = store.getState().auth.user.accessToken.token;
    const decodedAccess = store.getState().auth.decodedAccess.exp;

    const isRefreshExpired =
        dayjs.unix(store.getState().auth.decodedRefresh.exp).diff(dayjs()) < 1;
    const isAccessExpired =
        dayjs.unix(store.getState().auth.decodedAccess.exp).diff(dayjs()) < 1;

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
        store.dispatch(setUser(response.data));
        config.headers.Authorization =
            store.getState().auth.user.accessToken.token;
        return config;
    }
});

export default closedServer;
