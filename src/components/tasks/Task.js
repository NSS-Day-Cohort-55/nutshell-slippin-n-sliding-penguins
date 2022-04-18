//Author: Joe Maifeld. Component actions:

import { Link } from "react-router-dom"
import { getSpecificTask } from "../../modules/TaskDataManager";

export const TaskCard = ({singleTask, handleDeleteTask, handleUpdateTask}) => {


    

    return (
        <>
        <div className="card">
            <div className="card-content">    
                <h2>{singleTask.taskDescription}</h2><br/>
                <p>Completion expected by: {singleTask.dateDue}</p>
                <p>Is this complete? {singleTask.isComplete ? "Yes": "No"}</p>
                {singleTask.isComplete?
                <button type="button" onClick={() => handleDeleteTask(singleTask.id)}>You did it!</button> :
                //TODO rework checkbox, make it so that when it's clicked it auto adjusts the DB, possibly a popup to confirm?
                <label><input type="checkbox" onClick={() => handleUpdateTask(singleTask.id)}></input>Completed Task!</label>}<br/>
                {singleTask.isDone? "":<Link to={`/tasks/${singleTask.id}/edit`}>
                <button>Edit</button>
                </Link>}
            </div>
        </div>
        </>
    )
}
