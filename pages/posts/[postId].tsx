import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Post } from "../../interfaces/blog";
import Button from "../../components/Button";
import { deletePost } from "../../store/actions";

function posts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const [post, setPost] = useState({ id: "", body: "", title: "" });
  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    setPost(posts.find((el: Post) => el.id == router.query.postId));
  }, []);

  const delHandler = () => {
    setDeleted("Post deleted");
    dispatch(deletePost(post.id));
  };

  return (
    <Layout>
      <div className="post__title">
        {typeof post !== "undefined" ? post.title : ""}
      </div>
      <div className="post__main">
        {typeof post !== "undefined" ? post.body : ""}
      </div>
      <div className="post__btns">
        <div className="post__del">
          <Button onClick={delHandler}>Delete post</Button>
        </div>
      </div>
      <div className="delsign">{deleted}</div>
    </Layout>
  );
}

export default posts;
