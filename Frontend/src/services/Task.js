import axios from "axios"

const URL = "/api/tasks"

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getConfig = () => ({
  headers: {
    Authorization: token
  }
})

const getAll = async () => {

  const data =getConfig()
  console.log(data)
  const res = await axios.get(URL, data)
  return res.data

}

const create = async (newTask) => {

  const res = await axios.post(URL, newTask, getConfig())
  return res.data

}

const remover = async (id) => {

  const res = await axios.delete(`${URL}/${id}`, getConfig())
  return res.data
  
}

export default { getAll, create, remover, setToken }