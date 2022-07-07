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

    const isRefreshExpired = dayjs.unix(decodedRefresh).diff(dayjs()) < 1;
    const isAccessExpired = dayjs.unix(decodedAccess).diff(dayjs()) < 1;

    if (isRefreshExpired) {
        store.dispatch(logout());
        return config;
    }

    if (!isAccessExpired) {
        config.headers.Authorization = accessToken;
        return config;
    }

    if (isAccessExpired) {
        config.headers.refreshToken = refreshToken;
        const response = await axios.post(`${baseURL}/auth/refresh`, {
            refreshToken,
        });
        store.dispatch(setUser(response.data));
        return config;
    }
});

export default closedServer;
