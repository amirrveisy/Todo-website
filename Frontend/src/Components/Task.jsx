//Displaying the conents

const Task = ({ task, fun }) => {


    return (

        <li>
            {task}
            <button data-testid='button' onClick={fun} > Done </button>

        </li>



    )

}

export default Task