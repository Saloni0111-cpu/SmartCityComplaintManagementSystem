//this is responsible for fetching req from backend and make sure every req is sent correctly and securely.
// Remember it like: 1. Your backend is a building
// 2. API routes are room 
// 3. JWT Tokens are ID card
//So they need to call backend and send JWT every time

import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
console.log("TOKEN SENT:", token);
    if(token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;