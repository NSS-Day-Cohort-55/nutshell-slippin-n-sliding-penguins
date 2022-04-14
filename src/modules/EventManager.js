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


