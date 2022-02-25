import React, { useState } from "react";
import { updateCommentVote } from "../utils/api";

const CommentVote = ({currentVote, id, setVoted}) => {
    const [vote, setVotes] = useState("");
    
    const handleClick = () => {
        setVotes(currentVote);
        setVotes(currentVote => currentVote + 1);
        updateCommentVote(id, 1)
        .then((res) => {
            setVoted(true)

        })
        setVoted(false);

    };

    return (
    <div>
        <button value={vote} onClick={handleClick}>Vote</button>
    </div>
)

}


export default CommentVote;