import axios from 'axios';
import qs from 'qs';

export const API_URL = 'http://3.39.203.36:8080';

/* axios 공통 config */
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Cache-Control': 'no-cache' },
});

/* baseAPI 정의 */
const baseAPI = {
  get: (url: string, params: any, forceUpdate = false, arrayFormat = 'repeat', config: any) =>
    axiosInstance.get(url, {
      forceUpdate,
      params,

      // [1,2,3] 형태의 배열을 "1,2,3" 형태로 stringify한 후 전송
      paramsSerializer: params => qs.stringify(params, { arrayFormat }),
      ...config,
    }),
  post: (url: string, data: any, ) => axiosInstance.post(url, data),
  put: (url: string, data: any, config: any) => axiosInstance.put(url, data, config),
  delete: (url: string, params: any) => axiosInstance.delete(url, { data: { ...params } }),
};
export default baseAPI;
