import axios from "axios";

// server
export const server = axios.create({
    baseURL: process.env.REACT_APP_SERVER_API,
});

// local
export const local = axios.create({
    baseURL: "http://localhost:5000",
});
