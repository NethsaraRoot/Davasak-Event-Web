import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://dawasakbackendapi-production.up.railway.app/api",
});

export default api;
