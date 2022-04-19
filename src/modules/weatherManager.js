//This will handle directing the weather and user API calls
//Rushay

const remoteURL = "http://localhost:8088";

//Thsi will get user's info so that the city and state can be accessed
export const getUserById = (num) => {
    return fetch(`${remoteURL}/users/${num}`)
    .then(res => res.json())
}