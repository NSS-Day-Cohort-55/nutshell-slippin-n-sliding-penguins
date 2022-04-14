//This will manage all of the fetch calls for Articles
//Rushay

const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
    .then(res => res.json())
  }