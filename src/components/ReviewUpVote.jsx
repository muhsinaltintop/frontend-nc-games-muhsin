import React, { useState } from "react";
import { updateReviewVote } from "../utils/api";

const ReviewUpVote = ({currentVote, id, setVoted}) => {
    const [vote, setVotes] = useState("");
    
    const handleClick = () => {
        setVotes(currentVote);
        setVotes(currentVote => currentVote + 1);
        updateReviewVote(id, 1)
        .then((res) => {
            setVoted(true)

        })
        setVoted(false);

        // updateCommentVote(id, 1)
        // .then((res) => {
        //     setVoted(true)

        // })
        // setVoted(false)
            console.log(vote, "vote in the Vote");
    };

    return (
    <div>
        <button value={vote} onClick={handleClick}>Vote</button>
    </div>
)

}


export default ReviewUpVote;
