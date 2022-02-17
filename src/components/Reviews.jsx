import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import styles from "./Reviews.module.css";
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(()=>{
    setIsLoading(true);
    setError(null);
    getAllReviews()
    .then((reviewsFromApi) => {
        setAllReviews(reviewsFromApi);
        setIsLoading(false);
    })
    .catch((err)=>{
        setError(err);
    });

}, []);  
    return (
    <main className={styles.review}>
        <h2>Reviews</h2>
        { isLoading ? (
            <p>Loading</p>
        ) : error ? (
            <p>Error!</p>
        ) : (
        <ul>
            {reviews.map((review)=>{
                return(
                    <Link className={styles.review_link} to={`/reviews/${review.review_id}`}>

                        <li key={review.review_id}>
                            <img src={review.review_img_url} alt={review.title} />
                            <div className={styles.title}>{review.title}</div>
                            <div className={styles.date}>{dayjs(review.created_at).format("DD/MM/YYYY")}</div>
                            <div className={styles.owner}>by {review.owner}</div>
                            <div  className={styles.designer}>Designer: {review.designer}</div>
                            <div  className={styles.review_body}>Review: {review.review_body}</div>
                            <div  className={styles.votes}> Votes: {review.votes}</div>                                             
                        </li>
                    </Link>

                )

            }
            
            )

            }
        </ul>

        )

        }
    
    
    
    </main>
  )
}

export default Reviews;