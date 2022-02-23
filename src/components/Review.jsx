import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css"

const Review = () => {
    const [ review, setReview ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ voted, setVoted] = useState(false);
    const [ error, setError ] = useState(null);
    const { review_id } = useParams();

    
    
    useEffect(()=>{
        setIsLoading(true);
        setError(null);
        getReview(review_id)
        .then((reviewFromApi)=>{
            setReview(reviewFromApi);
            setIsLoading(false);
        })
        .catch((err)=>{
            setError({ err })
        })
        setVoted(false);
    },[review_id, voted]);
    
    return (
        <main className={ styles.review }>
            { isLoading ? (
                <p>Loading...</p>
                ) : error ? (
                    <p>Error!</p>
                    ) : (
                        <ul className={styles.review_ul}>
                    <li className={styles.review_ul_li} key={review.review_id}>
                     
                     <ReviewCard
                        currVotes={review.votes}
                        review_id={review.review_id}
                        setVoted={setVoted}
                        
                        />
                    </li>

                    
                </ul>


            )}
        </main>
    )
}

export default Review;