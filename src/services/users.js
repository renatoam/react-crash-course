import axios from "./axios"

export const authenticateService = async (email) => {
  try {
    const response = await axios.get('/authenticate', { params: { email } })
    return response.status === 200
  } catch {
    return false
  }
}

export const createUserService = async (user) => {
  const response = await axios.post('/users', user)

  return response.data
}
