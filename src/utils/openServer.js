import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = process.env.REACT_APP_SERVER_URL;

let authTokens = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

// export
const openServer = axios.create({
    baseURL,
});

// openServer.interceptors.request.use(async (req) => {
//     if (!authTokens) {
//         authTokens = localStorage.getItem("user")
//             ? JSON.parse(localStorage.getItem("user"))
//             : null;
//     }

//     const decodedToken = jwtDecode(authTokens.accessToken.token);
//     const isTokenExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;

//     if (!isTokenExpired) return req;

//     const response = await axios.post(`${baseURL}/auth/refresh`, {
//         refreshToken: authTokens.refreshToken.token,
//     });

//     localStorage.setItem("user", JSON.stringify(response.data));
//     return req;
// });

export default openServer;
