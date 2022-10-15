import axios from "axios";

const BASE_URL = 'http://localhost:3004'

export const axiosDefault = axios.create({
  baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
