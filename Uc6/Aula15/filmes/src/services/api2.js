import axios from 'axios';

const api2 = axios.create({
    baseURL: 'http://10.152.46.15:3333/'
})

export default api2;