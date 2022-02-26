import AppAxios from "./http"
import { API_BASE_URL, TIME_OUT } from "./config"

const http = new AppAxios({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT
})
export default http
