import axios from "axios";
import { StorageKeys } from "@/constants/enums";
import appConfig from "../../env.config";
import { getCookie } from "cookies-next";

const axiosInstance = axios.create({
	baseURL: `${appConfig.BASE_URL}`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	},
	timeout: 10000
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getCookie(StorageKeys.TOKEN);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);

export default axiosInstance;
