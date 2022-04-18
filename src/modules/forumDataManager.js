// written by jae: collection of fetch calls for managing message data

const remoteURL = "http://localhost:8088";

export const getAllMessages = () => {
  return fetch(`${remoteURL}/messages?_expand=user`).then((res) => res.json());
};

export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/messages/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const addMessage = (newMessage) => {
  return fetch(`${remoteURL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  }).then((response) => response.json());
};

export const getAllUsers = () => {
  return fetch(`${remoteURL}/users`).then((res) => res.json());
};

export const editMessage = (editedMessage) => {
  return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedMessage),
  }).then((data) => data.json());
};
