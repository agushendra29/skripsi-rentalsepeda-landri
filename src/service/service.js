import axios from 'axios'
const uri = "http://localhost:9092/api/"
export default {
    getBicycle(url) {
        if (url == '') {
            return axios.get(`${uri}bicycle/`);
        } else {
            return axios.get(`${uri}bicycle/${url}`);
        }
    },
    getDeliveryPrice(data) {
        return axios.get(`${uri}delivery-price/calculate?lat1=${data.lat1}&lat2=${data.lat2}&lon1=${data.lon1}&lon2=${data.lon2}`)
    },
    getRent() {
        return axios.get(`${uri}rent/`);
    },
    postRent(data) {
        return axios.post(`${uri}rent/`, data)
    },
    postlogin(data) {
        return axios.post(`${uri}users/login`, data)
    },
    register(data) {
        return axios.post(`${uri}users/register`, data)
    }
}