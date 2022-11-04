import { axiosDefault, axiosPrivate } from '../services/axios'
import store from "../store"
import { setToken } from "../store/userSlice"

export const getSummaryService = async () => {
  try {
    const response = await axiosPrivate.get('/summary')
  
    return response.data
  } catch (error) {
    if (error?.response?.status === 403) {
      try {
        const refresh = await axiosDefault.get('/refresh')
  
        store.dispatch(setToken(refresh.data.accessToken))
  
        const result = await axiosPrivate.get('/summary', {
          headers: {
            Authorization: `Bearer ${refresh.data.accessToken}`
          }
        })
  
        return result.data
      } catch (error) {
        console.error({ error })
        return { error: true, message: error?.response?.data?.message }
      }
    }

    console.error({ error })
    return { error: true, message: error?.response?.data?.message }
  }
}
