import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import styles from "./Reviews.module.css"
import ReviewUpVote from "./ReviewUpVote";

const ReviewVote = () => {
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
        <>
        
          <div className={styles.review_ul_li_div}>Votes: {review.votes}</div>
          <div><ReviewUpVote
                  currentVote={review.votes}
                  id={review.review_id}
                  setVoted={setVoted}

              />
          </div>
        </>
       

    )
}

export default ReviewVote;