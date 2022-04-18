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

    

    const handleUpdateTask = (id) => {
        const editedTask = {
            id: id,
            dateDue: "",
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
            {tasks.map((task) => {
                if(task.isComplete === false){
                    return (
              <TaskCard
                    key={task.id}
                    // tasks={tasks}
                    singleTask={task}
                    getTasks={getTasks}
                    // handleDeleteTask={handleDeleteTask}
                    handleUpdateTask={handleUpdateTask} />  
                    )}}  
                    
            )}
        </div>                                    
        </>
    )
}
