import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import { getReviewsByCategory, sortReviewsBy } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import DropDown from "./DropDown"

const ReviewsByCategory = () => {
  const { category } = useParams();
  const [reviewsByCategory, setReviewsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    
    setQuery(`${event.target.value}`)
  }



  useEffect(() => {
    setIsLoading(true);
    setError(null);
    if(query === ""){
        getReviewsByCategory(category)
        .then((reviewsFromApi) => {
        setReviewsByCategory(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((err)=>{
        setError(err);
      });
    } else {
      sortReviewsBy(query)
      .then((reviewsFromApi) => {
        setReviewsByCategory(reviewsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    }
  }, [category, query]);

  return (
    <main className={styles.review}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>error!</p>
      ) : (
        <ul>
          {       
          <div>
            Sort Reviews By: <DropDown dropChange={handleChange}/>
          </div> 
          }
        {reviewsByCategory.map((review) => {
          return (
            <Link to={`/reviews/${review.review_id}`}>
              <li key={review.review_id}>
                <img src={review.review_img_url} alt={review.title} />
                <div className={styles.title}>{review.title}</div>
                <div className={styles.date}>
                  {" "}
                  {dayjs(review.created_at).format("DD/MM/YYYY")}
                </div>
                <div className={styles.owner}>
                  <Link to={`/users/${review.owner}`}>by {review.owner}</Link>
                </div>
                <div className={styles.designer}>
                  Designer: {review.designer}
                </div>
                <div className={styles.body}>Review: {review.review_body}</div>
                <div className={styles.votes}>Votes: {review.votes}</div>
              </li>
            </Link>
          );
        })}
      </ul>
      )}
    </main>
  );
};

export default ReviewsByCategory;
