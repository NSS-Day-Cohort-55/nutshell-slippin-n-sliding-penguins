//Author: Joe Maifeld. Component actions:

const remoteURL = "http://localhost:8088";

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
    .then(res => res.json())
}

export const addTask=(newTask) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
        }).then(response => response.json())    
}

export const deleteTask = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
        method: "DELETE" 
        }).then(result => result.json())    
}

export const reviseTask = (singleTask) => {
    return fetch (`${remoteURL}/tasks/${singleTask.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleTask)
    }).then(data => data.json())
}