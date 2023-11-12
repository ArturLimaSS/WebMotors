import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const endpoint = axios.create({
    baseURL: baseUrl
})

const api = {
    options: () => {
        return endpoint.get('/options')
    },
    ofertas: () => {
        return endpoint.get('/ofertas')
    }
}

export default api;