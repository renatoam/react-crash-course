import axios from "axios";
import store from "../store";

const BASE_URL = 'http://localhost:3004'

export const axiosDefault = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

axiosPrivate.interceptors.request.use(function(request) {
  const token = store.getState().user?.accessToken
  const headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  }

  request.headers = { ...headers }

  return {
    ...request
  }
}, function(){})

export { axiosPrivate }
