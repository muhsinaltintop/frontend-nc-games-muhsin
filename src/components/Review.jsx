import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import ReviewCard from "./ReviewCard";

const Review = () => {
    const [ review, setReview ] = useState({});
    const [ voted, setVoted] = useState(false);
    const { review_id } = useParams();

    
    
    useEffect(()=>{
        
        getReview(review_id)
        .then((reviewFromApi)=>{
            setReview(reviewFromApi);
        })
    },[review_id, voted]);
    
    return (
        
                     <ReviewCard
                        currVotes={review.votes}
                        review_id={review.review_id}
                        setVoted={setVoted}
                        
                        />
        
    )
}

export default Review;