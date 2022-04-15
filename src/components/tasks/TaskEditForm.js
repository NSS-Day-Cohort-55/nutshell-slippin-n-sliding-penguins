//Author: Joe Maifeld. Component actions:


import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { getTaskById, updateTask } from "../../modules/TaskDataManager"
import "./TaskEditForm.css"


export const TaskEditForm = () => {
    const navigate=useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { taskId } = useParams()
    const [task, setTasks] = useState({objective: "", dateDue: ""}) 
}

    updateCurrentTask = 



    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
              <label htmlFor="name">What do you need to get done?</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="objective"
                  value={task.objective}
                />
                
                <label htmlFor="dateDue">Due By:</label>
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="dueDate"
                  value={task.dateDue}
                />
                
              </div>
    
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateCurrentTask}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );

}