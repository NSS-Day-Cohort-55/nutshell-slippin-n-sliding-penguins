//Author: Joe Maifeld. Component actions:this creates the card that displays the individual tasks

import { Link } from "react-router-dom"
import { deleteTask } from "../../modules/TaskDataManager";
import "./Task.css"

export const TaskCard = ({singleTask, handleUpdateTask, getTasks}) => {

    const handleDeleteTask = () => {
        deleteTask(singleTask.id)
        .then(getTasks)
    }
    

    return (
        <>
            <div className="card">
                <div className="card-content">    
                    <h2>{singleTask.taskDescription}</h2><br/>
                    
                    <p>Completion expected by: {singleTask.dateDue}</p>
                    <p>Is this complete? {singleTask.isComplete ? "Yes": "No"}</p>
                                      
                    <label><input type="checkbox" onClick={() => handleUpdateTask(singleTask.id)}>
                        </input>Completed Task!</label><br/>

                        <Link  to={`/tasks/${singleTask.id}/edit`} >
                        <button class="btn">Edit</button>
                        </Link>

                        <Link to={`/tasks`} >
                        <button class="btn" onClick={handleDeleteTask}>Delete</button>
                        </Link>
                </div>
            </div>
        </>
    )
}


