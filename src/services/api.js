import axios from 'axios'

const api = axios.create({
    baseURL: 'https://floating-wildwood-23003.herokuapp.com/'
})

export default api