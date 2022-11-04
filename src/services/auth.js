import { axiosDefault } from "./axios"

export const authenticateService = async (email) => {
  try {
    const response = await axiosDefault.get('/authenticate', { params: { email } })
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const signUpService = async (user) => {
  try {
    const response = await axiosDefault.post('/signup', user)
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const signInService = async (email, password) => {
  try {
    const response = await axiosDefault.post('/signin', { email, password }, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const signOutService = async () => {
  try {
    await axiosDefault.post('/signout', {
      withCredentials: true
    })
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}

export const refreshTokenService = async () => {
  try {
    const response = await axiosDefault.get('/refresh', {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return { error: true, message: error.response.data.message }
  }
}
