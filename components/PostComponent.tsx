import React from "react";
import Button from "../components/Button";
import Link from "next/link";

function PostComponent({ post }) {
  return (
    <div className="post">
      <div className="post__title">{post.title}</div>
      <div className="post__body">
        {post.body ? post.body.match(/[\w\W]{1,300}/) : ""}
        {post.body.length > 300 ? "..." : ""}
      </div>

      <Link href={`/posts/${post.id}`}>
        <Button>
          <a>View post</a>
        </Button>
      </Link>
    </div>
  );
}

export default PostComponent;
