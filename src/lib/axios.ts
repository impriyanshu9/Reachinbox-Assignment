import axios from "axios";

const api = axios.create({
    baseURL: "https://hiring.reachinbox.xyz/api/v1",
});

export default api