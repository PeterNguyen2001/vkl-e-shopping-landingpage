import axios from 'axios'
import queryString from 'query-string'
// Set up default config for http requests here

const axiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || 'https://19ad-118-69-93-186.ngrok.io/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config
})
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    // Handle errors
    throw error
  }
)
export default axiosClient
