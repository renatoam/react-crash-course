import axios from "axios"

export const createUserService = async (user) => {
  const response = await axios.post('http://localhost:3004/users', user)

  return response.data
}
