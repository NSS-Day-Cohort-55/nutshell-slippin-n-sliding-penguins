//Author: Joe Maifeld. Component actions:Creates a form to make a new task

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../modules/TaskDataManager';

export const TaskForm = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState({
    userId: parseInt(sessionStorage.getItem("nutshell_user")),
    taskDescription: "",
    isComplete: false,
    dateDue: ""
  });

  const theDate=Date.now()

  const newTask = {...tasks}

  const handleControlledInputChange = (evt) => {
    // This creates a new task object
    
    
    newTask.taskDescription = evt.target.value
    newTask.timestamp = theDate
        
		setTasks(newTask)
   }

   const handleControlledDateChange = (evt) => {
        newTask.dateDue = evt.target.value

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
					<input type="date" id="date" onChange={handleControlledDateChange} required autoFocus className="form-control" placeholder="Task date" value={tasks.dateDue} />
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


