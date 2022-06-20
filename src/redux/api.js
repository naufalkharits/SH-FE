import axios from "axios";

// server
export const server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
});
// mockapi
export const mockapi = axios.create({
    baseURL: "http://localhost:5000",
});
