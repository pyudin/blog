import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Post } from "../../interfaces/blog";

function posts() {
  const router = useRouter();
  const posts = useSelector((state) => state.posts.data);
  const [post, setPost] = useState({ body: "", title: "" });

  useEffect(() => {
    setPost(posts.find((el: Post) => el.id == router.query.postId));
  }, []);

  return (
    <Layout>
      <div className="post__title">
        {typeof post !== "undefined" ? post.title : ""}
      </div>
      <div className="post__main">
        {typeof post !== "undefined" ? post.body : ""}
      </div>
    </Layout>
  );
}

export default posts;
