//This will manage all of the fetch calls for Articles
//Rushay

const remoteURL = "http://localhost:8088"

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
    .then(res => res.json())
}

// http://localhost:8088/articles?userId=2

export const getArticlesByUser = (num) => {
    return fetch(`${remoteURL}/articles?userId=${num}`)
    .then(res => res.json())
}

export const getSpecificArticle = (num) => {
    return fetch(`${remoteURL}/articles/${num}`)
    .then(res => res.json())
}

  
export const addArticle = newArticle => {
  return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
  }).then(response => response.json())
}

export const deleteArticle = id => {
    return fetch(`${remoteURL}/articles/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}