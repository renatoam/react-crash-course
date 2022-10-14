import axios from '../services/axios'

export const getSummaryService = async (token) => {
  try {
    const response = await axios.get('/summary', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    return response.data
  } catch (error) {
    console.log({ error })
    return { error: true, message: error?.response?.data?.message }
  }
}
