import { useState, useEffect } from 'react'
import taskRouter from '../services/Task'
import util from '../util'

const useTasks = () => {

  const [tasks, setTask] = useState([])
  const [input, setInput] = useState("")
  console.log(util.getTodayDate())
  const [dateInput, setDateInput] = useState(util.getTodayDate())

  useEffect(() => {

    const fetchdata = async () => {

      const retunredObject = await taskRouter.getAll()

      setTask(retunredObject)

    }

    fetchdata()


  }, [])

  const changeInput = (event) => setInput(event.target.value)

  const changeDateInput = (event) => {
    setDateInput(event.target.value)
  }


  const addTask = async (event) => {
    event.preventDefault()
    // Creating the new task


    // if( dateInput===""){
    //   setDateInput(getTodayDate)
    //   console.log(dateInput)
    // }

    console.log(dateInput)
    let newTask = {

      "task": input,
      "date": dateInput

    }

    await taskRouter.create(newTask)

    // changing the state 

    let newTasks = [...tasks, newTask]
    setTask(newTasks)
    setInput("")
    setDateInput(util.getTodayDate())

  }

  const remTask = (id) => {

    //front end side 
    setTask(prev => prev.filter(p => p.id !== id))
    // db side
    taskRouter.remover(id)

  }

  return { tasks, input, changeInput, addTask, remTask, dateInput, changeDateInput }

}
export default useTasks


