import { axiosPrivate } from '../services/axios'

export const getSummaryService = async (token) => {
  try {
    const response = await axiosPrivate.get('/summary', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    return { error: true, message: error?.response?.data?.message }
  }
}
