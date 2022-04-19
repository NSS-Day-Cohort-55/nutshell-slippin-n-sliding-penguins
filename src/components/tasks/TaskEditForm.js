//Author: Joe Maifeld. Component actions:creates a form that allows you to edit a form


import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import { updateTask, getSpecificTask } from "../../modules/TaskDataManager"
import "./TaskEditForm.css"


export const TaskEditForm = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { taskId } = useParams()
    const [task, setTasks] = useState({taskDescription: "", dateDue: ""}) 


    const stateToChange = { ...task }
    const handleFieldChange = (evt) => {
        stateToChange[evt.target.id] = evt.target.value
        setTasks(stateToChange)
    }

    const updateCurrentTask = (evt)  => {
        evt.preventDefault()
        setIsLoading(true)

        const editedTask = {
            id: taskId,
            taskDescription: task.taskDescription,
            dateDue: task.dateDue
        }
        

        updateEditedTask(editedTask)
    } 

    const getTaskToEdit = () =>{
      return getSpecificTask(taskId).then(specificTask =>{
          setTasks(specificTask)
      })
    }
 
  

    const updateEditedTask = (newObject) => {
      updateTask(newObject).then(() =>navigate("/tasks"))
    }    

    useEffect(() => {
      getTaskToEdit()
      setIsLoading(false)          
      }, [])


    return (
        <>
          <form>
            <fieldset>
              <div className="edit-form">
              <label htmlFor="taskDescription">Changed your mind?</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="taskDescription"
                  value={task.taskDescription}
                />
                
                <label htmlFor="dateDue">Due By:</label>
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="dateDue"
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

