import React, { useState } from "react";
import { updateCommentVote, updateReviewVote } from "../utils/api";

const Vote = ({currentVote, id, setVoted}) => {
    const [vote, setVotes] = useState("");
    const [error, setError] = useState(false);
    
    
    const handleClick = () => {
        setVotes(currentVote);
        setVotes((currentVote)=> {
            console.log("vote in the Vote");
            return currentVote + 1;
        });
        updateReviewVote(id, 1)
        updateCommentVote(id, 1)
        .then((res) => {
            setError(false);
            setVoted(true)
        })
        .catch((err)=>{
            setError(false)
        })
        setVoted(false);

    };

    if(error)
    return(
        <div>Error!</div>
    );
    
    return (
    <div>
        {console.log(vote, currentVote, "what is vote?")}

        <button value={vote} onClick={handleClick}>Vote</button>
    </div>
)

}


export default Vote;
