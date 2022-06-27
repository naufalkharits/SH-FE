import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

// server
export const openServer = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
});

// server
export const closedServer = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
    headers: { Authorization: user.accessToken },
});

// local
export const local = axios.create({
    baseURL: "http://localhost:5000",
});
