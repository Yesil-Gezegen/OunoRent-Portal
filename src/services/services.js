import { axiosInstance } from "./../helpers/axios/data"

export const getData = (endpoint) => axiosInstance.get(endpoint);
export const postData = (endpoint, data) => axiosInstance.post(endpoint, data);