//Author: Joe Maifeld. Component actions:

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskForm.css'

export const TaskForm = () => {
  const [] = useState({
    userId: 0,
    taskDescription: "",
    isComplete: "",
    timeStamp: "",
  });

  const handleClickSaveTask = (event) => {

    const userId = user.userId {			
			addTask(task).then(() => navigate("/tasks"))
		}
	}

  return (
    <form className="taskForm">
      <h2 className="taskForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Task Name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task name" value={task.name} />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
					<label htmlFor="date">Completion Date:</label>
					<input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task date" value={task.date} />
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
