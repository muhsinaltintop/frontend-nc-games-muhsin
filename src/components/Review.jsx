import  dayjs  from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import styles from "./Reviews.module.css"

const Review = ({ username }) => {
    const [ review, setReview ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
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
    },[review_id]);

    return (
        <main className={ styles.review }>
            { isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error!</p>
            ) : (
                <ul>
                    <li key={review.review_id}>
                <       h1>Review: {review.review_id}</h1>
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
                    </li>
                </ul>


            )}
        </main>
    )
}

export default Review;