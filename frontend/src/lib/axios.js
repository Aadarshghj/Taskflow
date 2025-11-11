// src/lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api",  // use relative base URL when proxy is configured
	withCredentials: true,
});

export default axiosInstance;
