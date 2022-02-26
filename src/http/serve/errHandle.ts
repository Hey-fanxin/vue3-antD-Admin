// 发送请求错误处理
export const RequestErrorHandle = (error: Error) => Promise.reject(error)

// 返回数据错误处理
export const ResposeErrorHandle = (error: Error) => Promise.reject(error)
