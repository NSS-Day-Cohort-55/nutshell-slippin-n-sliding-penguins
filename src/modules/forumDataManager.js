const remoteURL = "http://localhost:8088";

export const getAllMessages = () => {
  return fetch(`${remoteURL}/messages?_expand=user`).then((res) => res.json());
};

export const getPublicMessages = () => {
  return fetch(`${remoteURL}/messages/?recepientId=0&_expand=user`).then(
    (res) => res.json()
  );
};

export const getPrivateMessages = (userId) => {
  return fetch(
    `${remoteURL}/messages/?recepientId=${userId}&_expand=user`
  ).then((res) => res.json());
};

export const getUserSentMessages = (userId) => {
  return fetch(`${remoteURL}/messages/?userId=${userId}&_expand=user`).then(
    (res) => res.json()
  );
};

export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/messages/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
