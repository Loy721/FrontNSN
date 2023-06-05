import axios from "axios";

const api = axios.create();

api.interceptors.request.use(function (config) {
    let user = JSON.parse(localStorage.getItem('user'));
    config.headers.Authorization =  user.accessToken;
     
    return config;
});

export default api