const remoteURL = "http://localhost:8088"

export const getEventById = (eventId) => {
    return fetch (`$remoteURL}/events/${eventId}`)
    .then(res => res.json())
}
export const getAllEvents = () => {
    return fetch(`${remoteURL}/events`)
    .then(res => res.json())
}

export const deleteEvent = id => {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}
export const addEvent = newEvent => {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
}
export const updateEvent  = (editedEvent) => {
	return fetch(`${remoteURL}/events`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedEvent)
	}).then(data => data.json());
}
//patch vs put: patch is specific to one value; whereas put is to an entire object