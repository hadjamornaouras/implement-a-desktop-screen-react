let SERVER_URL = `https://jsonplaceholder.typicode.com`;
export const postAsync = async data => {
  let body = {
    title: "Test front",
    body: data,
    userId: 1
  };
  return await fetch(`${SERVER_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  })
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log("error", error));
};

export const getAsync = async (start = "", limit = "") => {
  return await fetch(`${SERVER_URL}/photos?_start=${start}&_limit=${limit}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(error => console.log("error", error));
};

export const deleteAsync = async id => {
  return await fetch(`${SERVER_URL}/photos/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => console.log("repose delete", response.json()))
    .catch(error => console.log("error", error));
};
