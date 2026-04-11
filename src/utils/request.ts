import axios from 'axios'

const request = axios.create({
  timeout: 10000,
})

request.interceptors.request.use((config) => config)
request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export default request
