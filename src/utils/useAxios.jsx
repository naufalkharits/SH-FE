import { useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";

const baseURL = process.env.REACT_APP_SERVER_API;

// export
const useAxios = () => {
    const { user, decodedAccess } = useSelector((state) => state.auth);
    console.log(user);
    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: user?.accessToken?.token },
    });

    axiosInstance.interceptors.request.use(async (req) => {
        const isExpired = dayjs.unix(decodedAccess.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        const response = await axios.post("/auth/refresh", {
            refreshToken: user.refreshToken.token,
        });

        localStorage.setItem("user", JSON.stringify(response.data));

        req.headers.Authorization = response.data.accessToken.token;
        return req;
    });
    return axiosInstance;
};

export default useAxios;
