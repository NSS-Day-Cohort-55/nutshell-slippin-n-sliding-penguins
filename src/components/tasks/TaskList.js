//Author: Joe Maifeld. Component actions:

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTasks, deleteTask, reviseTask } from "../../modules/TaskDataManager.js"
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

    const handleReviseTask = (id) => {
        const editTask = {
            id: id,
            dateDue: "",
            // taskDescription: "",
            isComplete: true
        }
        reviseTask(editTask).then(() => getAllTasks().then(setTasks))
    }

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <>
        <section className="section-cards">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/tasks/add")}}>New Task!</button>
        </section>
        <div className="container-cards">
            {tasks.map(task =>
                <TaskCard
                    key={task.id}
                    singleTask={task}
                    handleDeleteTask={handleDeleteTask}
                    handleReviseTask={handleReviseTask}/>
                    )}
        </div>                                    
        </>
    )
}