import React, { useEffect, useState } from 'react'
import { getAllReviews, sortReviewsBy } from '../utils/api'
import styles from "./Reviews.module.css";
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

const Reviews = () => {
  const [reviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
      setQuery(`${event.target.value}`)
  }


useEffect(()=>{
    setIsLoading(true);
    setError(null);
    if (query === "") {

        getAllReviews()
        .then((reviewsFromApi) => {
            setAllReviews(reviewsFromApi);
            setIsLoading(false);
        })
        .catch((err)=>{
            setError(err);
        });
    } else {
        sortReviewsBy(query)
      .then((reviewsFromApi) => {
        setAllReviews(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
    }
}, [query]);  
    return (
    <main className={styles.review}>
        <h2>Reviews</h2>
        { isLoading ? (
            <p>Loading</p>
        ) : error ? (
            <p>Error!</p>
        ) : (
        <ul>
            {
                <div>
                    Sort Reviews By: <DropDown dropChange={handleChange}/>
                </div>
            }
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
            })}
        </ul>
    )}
    
    
    
    </main>
  )
}

export default Reviews;