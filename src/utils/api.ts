import axios from "axios";
import { store } from "@/redux/store/store";
import { RootState } from "@/redux/store/store";

export const api = axios.create({
    baseURL: "https://hiring.reachinbox.xyz/api/v1"
});

api.interceptors.request.use(
    (config) => {
        const state: RootState = store.getState();
        const token = state.auth.token;

        if(token) {
            // Bearer token
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);