import axios from "axios"

const URL="/api/signup"


const create = async (newUser) => {
  const response = await axios.post(URL, newUser)
  return response.data
}

export default {create}


