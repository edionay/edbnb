import axios from 'axios'

const api = axios.create({
    baseURL: 'https://salty-mesa-40308.herokuapp.com'
})

export default api