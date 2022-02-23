import React, { useState } from "react";
import {  postCommentByReviewId } from "../utils/api";
import { Users } from "./User";
import styles from "./AddComment.module.css";

const AddComment = ({review_id, setIsCommented, users}) => {
    const[username, setUsername] = useState("");
    const[comment, setComment] = useState("");
    const isCommentEmpty = comment.length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        postCommentByReviewId(review_id, username, comment)
        .then((res)=> {
            setUsername("");
            setComment("");
            setIsCommented(true);    
        })
        .catch((err)=> {
            console.log(err);
            setIsCommented(false);
        })
    }

    return (
        <>
        <h3>Plese use one of the following usernames:</h3>
        <br />
        <Users />
        <form className={styles.comment_form} onSubmit={handleSubmit}>
            <label className={styles.comment_username}>
                Username:
                <br />
                <input 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <br />
            <label className={styles.comment_body}>
                Comment:
                <br />
                <textarea 
                
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                />
            </label>
            <br />
            <button type="submit" disabled={isCommentEmpty}>Submit Comment!</button>
            
        </form>
        </>
    )
}
export default AddComment;