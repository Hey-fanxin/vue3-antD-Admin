// import {API_BASE_URL} from "../../../vite/config"
interface PostUrl {
  [key: string]: string
}
const apiKeys = <PostUrl>{
  toListData: '/list'
}
// Object.keys(apiKeys).forEach(key => {
//   apiKeys[key] =  `${API_BASE_URL}${apiKeys[key]}`
// })
export default apiKeys