import  dayjs  from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import styles from "./Reviews.module.css"
import ReviewVote from "./ReviewVote";

const ReviewCard = ({ username }) => {
    const [ review, setReview ] = useState({});
    const [voted, setVoted] = useState(false);
    const { review_id } = useParams();


    useEffect(()=>{
        getReview(review_id)
            .then((reviewFromApi)=>{
                setReview(reviewFromApi);
        })
    },[review_id, voted]);

    return (
       
                <>
                
                    <h1>Review: {review.review_id}</h1>
                        <img src={review.review_img_url} alt={review.title} />
                        <div className={styles.title}>{review.title}</div>
                        <div className={styles.date}>
                            {dayjs(review.created_at).format("DD/MM/YYYY")}
                        </div>
                        <div className={styles.owner}>
                        <Link id="ownerlink" to={`/users/${review.owner}`}>by {review.owner}</Link>
                        </div>
                        <div className={styles.designer}>
                            Designer: {review.designer}
                        </div>
                        <div className={styles.review_body}>
                            Review: {review.review_body}
                        </div>
                        <div className={styles.votes}>Votes: {review.votes}</div>
                        <div><ReviewVote
                            currVotes={review.votes}
                            review_id={review.review_id}
                            setVoted={setVoted}
                            />
                        </div>
                </>

    )
}

export default ReviewCard;