import { Post } from "../../interfaces/blog";

export const addPost = (post: Post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
