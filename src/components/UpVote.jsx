import React, { useState } from "react";
import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://muhsinncgames.herokuapp.com/api",
});


const UpVote = ({currentVote, id, setVoted, path}) => {
    const [vote, setVotes] = useState("");
    
    const handleClick = () => {
        setVotes(currentVote);
        setVotes(currentVote => currentVote + 1);
        
        gamesApi.patch(`/${path}/${id}`, { inc_votes: 1 })
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


export default UpVote;
