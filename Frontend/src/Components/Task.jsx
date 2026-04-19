//Displaying the conents

const Task = ({task , fun})=>{  


    return (

        <li>

             {task}
             <button onClick={fun} > Done </button>
        
        
        </li>
        
        

    )

}

export default Task