import axios from "axios";
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
    if (store.getState().auth.isRefreshExp) {
        store.dispatch(logout());
        return config;
    }

    if (!store.getState().auth.isAccessExp) {
        config.headers.Authorization =
            store.getState().auth.user.accessToken.token;
        return config;
    }

    if (store.getState().auth.isAccessExp) {
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
