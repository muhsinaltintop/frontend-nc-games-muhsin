import React, { useState } from "react";
import { updateReviewVote } from "../utils/api"

const ReviewVote = ({currentVote, review_id, setVoted}) => {
    const [vote, setVotes] = useState(currentVote);
    const [error, setError] = useState(false);

    const handleClick = () => {
   
        setVotes((currentVote)=>{
            return currentVote + 1;
        });
        updateReviewVote(review_id, 1)
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

export default ReviewVote;