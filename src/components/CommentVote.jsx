import React, { useState } from "react";
import { updateCommentVote } from "../utils/api"

const CommentVote = ({currentVote, comment_id, setVoted}) => {
    const [vote, setVotes] = useState(currentVote);
    const [error, setError] = useState(false);
    
    const handleClick = (e) => {
        e.preventDefault();
        setVotes((currentVote)=>{
            return currentVote + 1;
        });
        updateCommentVote(comment_id, 1)
        .then((res)=>{
            setError(false);
            setVoted(true);
        })
        .catch((err)=>{
            setError(true);
        });
        setVoted(false);
    };
    if(error)
    return(
        <div>
            <p>Error!</p>
        </div>
    );

    return (
        <div>
            <button value={vote} onClick={handleClick}>
                Vote
            </button>
        </div>
    )
}

export default CommentVote;