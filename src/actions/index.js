const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "BLOG";

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_POSTS",
    payload: promise
  }
}

export function createPost(body, callback) {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const promise = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: "CREATE_POST",
    payload: promise
  }
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_POST",
    payload: promise
  }
}
