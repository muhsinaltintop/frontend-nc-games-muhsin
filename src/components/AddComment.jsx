import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByReviewId } from "../utils/api";
import styles from "./AddComment.module.css";

const AddComment = ({ setComment }) => {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const {review_id} = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    postCommentByReviewId(review_id, username, body)
      .then((res) => {
        setComment(true);
      })
      .catch((error) => {
        setComment(false);
      });
  };
 
  return (
    <div className={styles.addComment}>
      
      
        <form onSubmit={handleSubmit}>
        <label className={styles.addComment_username}>
            Username:
            <br />
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label className={styles.addComment_body}>
            Comment:
            <br />
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </label>
          <p>

          <button type="submit">Sumbit Comment</button>
          </p>
        </form>
    </div>
  );
};

export default AddComment;
