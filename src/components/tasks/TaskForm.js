//Author: Joe Maifeld. Component actions:

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../modules/TaskDataManager';

export const TaskForm = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState({
    userId: 0,
    taskDescription: "",
    isComplete: false,
    dateDue: ""
  });

  const theDate=Date.now()
  const theUserId=sessionStorage.getItem("nutshell_user")
  
  // const [isLoading, setIsLoading] = useState(false)

  const handleControlledInputChange = (evt) => {
    // This creates a new task object
    const newTask = {...tasks}
    let selectedVal = evt.target.value


    if (evt.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		
		newTask[evt.target.id] = selectedVal
		
        newTask.timestamp = theDate
        newTask.userId = theUserId
		setTasks(newTask)

   }

  const handleClickSaveTask = (evt) => {
     	evt.preventDefault()
			  addTask(tasks).then(() => navigate("/tasks"))
		
	}

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Task Name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Task" value=
          {tasks.taskDescription} />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
					<label htmlFor="dateDue">Completion Date:</label>
					<input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task date" value={tasks.dateDue} />
				</div>
      </fieldset>
      
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClickSaveTask}
        
      >
        Save Task
      </button>
    </form>
  );
};


