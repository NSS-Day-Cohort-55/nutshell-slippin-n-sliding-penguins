//Author: Joe Maifeld. Component actions:

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTasks, deleteTask, updateTask } from "../../modules/TaskDataManager.js"
import { TaskCard } from "./Task.js"


export const TaskList =() => {
    const navigate = useNavigate()
 
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        })        
    }

    const handleDeleteTask = id => {
        deleteTask(id)
        .then(() => getAllTasks().then(setTasks))
    }

    const handleUpdateTask = (id) => {
        const editedTask = {
            id: id,
            dateDue: "",
            // taskDescription: "",
            isComplete: true
        }
        updateTask(editedTask).then(() => getAllTasks().then(setTasks))
    }
    useEffect(() => {
        getTasks()
    }, [])


    return (
        <>
        <section className="task-cards">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/tasks/add")}}>New Task!</button>
        </section>
        <div className="container-cards">
            {tasks.map(task =>
                <TaskCard
                    key={task.id}
                    // tasks={tasks}
                    singleTask={task}
                    handleDeleteTask={handleDeleteTask}
                    handleUpdateTask={handleUpdateTask} />  
                    )}
        </div>                                    
        </>
    )
}
