import axios from "axios";

// server
export const server = axios.create({
    baseURL: "http://localhost:5000",
});
// mockapi
export const mockapi = axios.create({
    baseURL: "http://localhost:5000",
});
