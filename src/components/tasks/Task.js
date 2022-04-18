//Author: Joe Maifeld. Component actions:

import { Link } from "react-router-dom"
import { deleteTask } from "../../modules/TaskDataManager";

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

                        <Link to={`/tasks/${singleTask.id}/edit`}>
                        <button >Edit</button>
                        </Link>

                        <Link to={`/tasks`}>
                        <button onClick={handleDeleteTask}>Delete</button>
                        </Link>
                </div>
            </div>
        </>
    )
}


