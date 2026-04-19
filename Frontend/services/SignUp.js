import axios from "axios"

const URL="http://localhost:3001/api/signup"


const create = async (newUser) => {
  const response = await axios.post(URL, newUser)
  return response.data
}

export default {create}


