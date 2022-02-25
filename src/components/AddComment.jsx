import React, { useState } from "react";
import { postCommentByReviewId } from "../utils/api";
import styles from "./AddComment.module.css";

const AddComment = ({ currentComments, review_id, setCommented}) => {
    const [ username, setUsername] = useState("");
    const [ body, setBody] = useState("");
    const isBodyEmpty = body.length === 0;
    // const[ commented, isCommented] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        postCommentByReviewId(review_id, username, body)
        .then((result)=> {
            setUsername("");
            setBody("");
            setCommented([result, ...currentComments]);
            
        }).catch((err) => {
            console.log(err);
        })
        
    }

    return (
        <>
        <br />
        <br />
        <h3>Plese use one of the following usernames:</h3>
        <br />
        {/* <Users /> */}
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
                
                value={body}
                onChange={(event) => setBody(event.target.value)}
                />
            </label>
            <br />
            <button disabled={isBodyEmpty} type="submit" >Submit Comment!</button>
        </form>
        </>
    )

}

export default AddComment;