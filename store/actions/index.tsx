import axios from "axios";
import { Post } from "../../interfaces/blog";

export const addPost = (post: Post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const createPost = (post: Post) => (dispatch) => {
  axios
    .post("https://simple-blog-api.crew.red/posts", JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((err) => console.log("Create post error: ", err));
};

export const fetchPosts = () => (dispatch) => {
  axios
    .get("https://simple-blog-api.crew.red/posts")
    .then((res) => res.data)
    .then((posts) =>
      dispatch({
        type: "FETCH_POSTS",
        payload: posts,
      })
    )
    .catch((err) => console.log("Fetching error: ", err));
};
