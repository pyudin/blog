import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Post } from "../../interfaces/blog";

function posts() {
  const router = useRouter();
  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState({ body: "", title: "" });

  useEffect(() => {
    setPost(posts.find((post: Post) => post.id === router.query.postId));
  }, []);

  return (
    <Layout>
      <div className="post__title">{post.title}</div>
      <div>{post.body}</div>
    </Layout>
  );
}

export default posts;
