import axios from "axios";
import { Post } from "../../interfaces/blog";

export const addPost = (post: Post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const fetchPosts = () => (dispatch) => {
  axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data)
    .then((posts) =>
      dispatch({
        type: "FETCH_POSTS",
        payload: posts,
      })
    );
};
