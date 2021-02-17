import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions";
import { v4 as uuid } from "uuid/";
import { Layout } from "../../components/Layout";
import Button from "../../components/Button";

function newPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const element = document.querySelector("#btn");
    if (!title || !body) {
      element.setAttribute("disabled", "");
    } else {
      element.removeAttribute("disabled");
    }
  }, [title, body]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const submitHandler = () => {
    dispatch(addPost({ id: uuid(), title, body }));
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
            name="title"
            placeholder="Enter title..."
            onChange={titleHandler}
            value={title}
          ></textarea>
        </div>
        <div>
          <textarea
            rows="20"
            cols="90"
            id="newBody"
            name="body"
            placeholder="Enter post..."
            onChange={bodyHandler}
            value={body}
          ></textarea>
        </div>
        <Button id="btn" onClick={submitHandler}>
          Add post
        </Button>
      </div>
    </Layout>
  );
}

export default newPost;
