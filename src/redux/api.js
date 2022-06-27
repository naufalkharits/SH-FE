import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

// server
export const server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
});

// server
export const closedServer = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
    headers: { Authorization: user.accessToken }
});

// mockapi
export const mockapi = axios.create({
    baseURL: "http://localhost:5000",
});
