import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
import {RequestErrorHandle, ResposeErrorHandle} from "./errHandle"

interface Result<T = any> {
  code: number,
  msg: string,
  data: T
}

class AppAxios {
  private instance: AxiosInstance;
  private readonly options: AxiosRequestConfig;
  constructor (options: AxiosRequestConfig) {
    this.instance = axios.create(options);
    this.options = options;
    this.init()
  }

  private init () {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  private interceptorsRequest () {
    this.instance.interceptors.request.use(
      config => config,
      error => RequestErrorHandle(error)
    )
  }

  private interceptorsResponse () {
    this.instance.interceptors.response.use(
      response => response,
      error => ResposeErrorHandle(error)
    )
  }

  get<T = any> (url: string, params?: any, options?: AxiosRequestConfig): Promise<Result<T>>{
    return this.request({url, method: 'GET', params, ...options});
  }

  post<T = any> (url: string, data?: any, options?: AxiosRequestConfig): Promise<Result<T>>{
    return this.request({url, data, method: 'POST', ...options});
  }

  put<T = any> (url: string, data?: any, options?: AxiosRequestConfig): Promise<Result<T>>{
    return this.request({url, data, method: 'PUT', ...options});
  }

  delete<T = any> (url: string, data?: any, options?: AxiosRequestConfig): Promise<Result<T>>{
    return this.request({url, data, method: 'DELETE', ...options});
  }

  request<T>(options: AxiosRequestConfig): Promise<Result<T>> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, AxiosResponse<Result<T>>>(options)
        .then((res) => {
          const data = <Result<T>>res.data
          resolve(data)
        })
        .catch((error: Error | AxiosError) => {
          console.log(error)
          reject(error)
        })
    })
  }
}

export default AppAxios