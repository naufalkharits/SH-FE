import axios from "axios";

// server
export const server = axios.create({
    baseURL: "https://final-project-binar.herokuapp.com",
});
// mockapi
export const mockapi = axios.create({
    baseURL: "http://localhost:5000",
});
