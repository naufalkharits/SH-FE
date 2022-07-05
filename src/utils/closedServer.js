import axios from "axios";
// import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
// import { useSelector } from "react-redux";

const baseURL = process.env.REACT_APP_SERVER_API;

let authTokens = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

// export
const closedServer = axios.create({
    baseURL,
    headers: { Authorization: authTokens?.accessToken?.token },
});

closedServer.interceptors.request.use(async (req) => {
    // const { decodedAccess } = useSelector((state) => state.auth);

    if (!authTokens) {
        authTokens = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null;
        req.headers.Authorization = authTokens?.accessToken?.token;
    }

    const user = jwtDecode(authTokens.accessToken.token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/auth/refresh`, {
        refreshToken: authTokens.refreshToken.token,
    });

    localStorage.setItem("user", JSON.stringify(response.data));
    req.headers.Authorization = response.data.accessToken.token;
    return req;
});

export default closedServer;
