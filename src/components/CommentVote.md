import React, { useState } from "react";
import { updateCommentVote } from "../utils/api";

const CommentVote = ({currentCommentVote, comment_id, setCommentVoted}) => {
    const [comment_vote, setCommentVotes] = useState(currentCommentVote);
    const [error, setError] = useState(false);

    const handleClick = () => {
        setCommentVotes((currentCommentVote)=> {
            return currentCommentVote + 1;
        });
        updateCommentVote(comment_id, 1)
        .then((res) => {
            setError(false);
            setCommentVoted(true)
        })
        .catch((err)=>{
            setError(false)
        })
        setCommentVoted(false);

    };

    if(error)
    return(
        <div>Error!</div>
    );
    
    return (
    <div>

        <button value={comment_vote} onClick={handleClick}>Vote</button>
    </div>
)

}


export default CommentVote;
