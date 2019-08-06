
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:90' , // api的base_url
    timeout: 5000, // request timeout
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

service.interceptors.request.use(config => {

    return config
}, error => {
    console.log(error);
    Promise.reject(error);
})

service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error);

        return Promise.reject(error)
    })

export default service;


