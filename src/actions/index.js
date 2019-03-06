const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "BLOG";

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: "FETCH_POSTS",
    payload: promise
  }
}
