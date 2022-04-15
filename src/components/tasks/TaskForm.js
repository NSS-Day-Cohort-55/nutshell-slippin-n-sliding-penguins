//Author: Joe Maifeld. Component actions:

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../modules/TaskDataManager';

export const TaskForm = () => {
  //TODO Make isComplete statement show string "Not Complete" instead of false
  const [tasks, setTasks] = useState({
    userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id,
    taskDescription: "",
    isComplete: false,
    dateDue: ""
    // timeStamp: new Date().toISOString()
  });

  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newTask = { tasks, setTasks }
    let selectedVal = event.target.value

    newTask[event.target.id] = selectedVal
      setTasks(newTask)
   }

  const handleClickSaveTask = (event) => {
     	event.preventDefault()
       		
			  addTask(tasks)
        .then(() => navigate("/tasks"))
		
	}

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Task Name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Task" value={tasks.name} />
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
