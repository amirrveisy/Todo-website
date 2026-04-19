import { useState, useEffect } from 'react'
import taskRouter from '../../services/Task'


const useTasks = () => {

  const [tasks, setTask] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const fetchdata = async () => {
      const retunredObject = await taskRouter.getAll()
      setTask(retunredObject.tasks)

    }
    fetchdata()


  }, [])

  const changeInput = (event) => setInput(event.target.value)

  const addTask = (event) => {
    event.preventDefault()
    // Creating the new task

    let newTask = { "task": input }

    taskRouter.create(newTask)

    // changing the state 
    let newTasks = [...tasks, newTask]
    setTask(newTasks)
    console.log(newTasks)
    setInput("")

  }

  const remTask = (id) => {
    //front end side 
    setTask(prev => prev.filter(p => p.id !== id))
    // db side
    taskRouter.remover(id)

  }

  return { tasks, input, changeInput, addTask, remTask }

}
export default useTasks


