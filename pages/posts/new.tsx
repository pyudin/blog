import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions";
import { v4 as uuid } from "uuid/";
import { Layout } from "../../components/Layout";
import Button from "../../components/Button";

function newPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = () => {
    if (title && body) {
      dispatch(addPost({ id: uuid(), title, body }));
    } else {
      alert("Enter the post");
      return;
    }
    setTitle("");
    setBody("");
  };

  return (
    <Layout>
      <div className="main">
        <div>New post:</div>
        <div>
          <textarea
            rows="1"
            cols="90"
            id="newTitle"
            onChange={titleHandler}
            value={title}
          ></textarea>
        </div>
        <div>
          <textarea
            rows="20"
            cols="90"
            id="newBody"
            onChange={bodyHandler}
            value={body}
          ></textarea>
        </div>
        <Button onClick={submitHandler}>Add post</Button>
      </div>
    </Layout>
  );
}

export default newPost;
