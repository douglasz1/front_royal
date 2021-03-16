import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost/api_royal/product/read.php'
})