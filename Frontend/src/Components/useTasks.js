import { useState, useEffect } from 'react'
import taskRouter from '../../services/Task'


const useTasks = () => {

  const [tasks, setTask] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {

    const fetchdata = async () => {

      const retunredObject = await taskRouter.getAll()

      console.log(retunredObject)
      setTask(retunredObject)

    }

    fetchdata()
    console.log(" This is after the assertion")
    console.log(tasks)

  }, [])

  const changeInput = (event) => setInput(event.target.value)

  const addTask = async (event) => {
    event.preventDefault()
    // Creating the new task

    let newTask = { "task": input }

    await  taskRouter.create(newTask)

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


