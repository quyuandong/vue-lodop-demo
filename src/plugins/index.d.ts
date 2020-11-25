import Vue, { VueConstructor } from 'vue'

import {
  AxiosInstance,
  AxiosStatic,
  AxiosPromise,
  AxiosInterceptorManager,
  AxiosResponse,
  AxiosRequestConfig,
  CancelStatic,
  CancelTokenStatic
} from 'axios'

declare global {
  interface Window {
    http: IAxiosInstance
  }
}

interface CheckBtnAuth {
  (authType: string, auth: any[], mode: boolean): Boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: IAxiosInstance
    $http_download: IAxiosInstance
    $get: GetProp
    $cloneDeep: CloneDeep
    $dayjs: Function
  }
  interface GetProp {
    (obj: Object, props: String, defaultVal?: any): any
  }

  interface CloneDeep {
    (obj: Object): Object
  }

  interface VueConstructor {
    $http: IAxiosInstance
    $http_download: IAxiosInstance
  }
}

declare module 'async-validator' {
  interface RuleItem {
    trigger?: string
  }
}

export interface IAxiosInstance extends AxiosInstance {
  getPdfPreview: (url: any, params?: {}) => Promise<any>
  upload: (url: any, params?: {}) => Promise<any>
  delPost: (url: any, params?: {}) => Promise<any>
  getDownload: (url: any, params?: {}) => Promise<any>
  postDownload: (url: any, params?: {}) => Promise<any>
  (config: AxiosRequestConfig): AxiosPromise
  (url: string, config?: AxiosRequestConfig): AxiosPromise
  defaults: AxiosRequestConfig
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise
  head(url: string, config?: AxiosRequestConfig): AxiosPromise
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

// export interface IAxiosStatic extends AxiosInstance {
//   upload: (url: any, params?: {}) => Promise<any>
//   Cancel: CancelStatic
//   CancelToken: CancelTokenStatic
//   create(config?: AxiosRequestConfig): AxiosInstance
//   isCancel(value: any): boolean
//   all<T>(values: (T | Promise<T>)[]): Promise<T[]>
//   spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
// }

// declare const Axios: IAxiosStatic

// export default Axios
