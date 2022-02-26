import apiKeys from "./api"
import {toListDataType} from "./types"
import http from "./serve"

export const getHttpList = (param?: any) => http.get<toListDataType>(apiKeys.toListData, param)