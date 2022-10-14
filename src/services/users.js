import axios from "./axios"

export const authenticateService = async (email) => {
  try {
    await axios.get('/authenticate', { params: { email } })
    return { success: true }
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const signUpService = async (user) => {
  try {
    const response = await axios.post('/signup', user)
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const signInService = async (email, password) => {
  try {
    const response = await axios.post('/signin', { email, password })
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}
