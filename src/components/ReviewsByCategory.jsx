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
        <ul className={styles.review_ul}>
          {       
          <div>
            Sort Reviews By: <DropDown dropChange={handleChange}/>
          </div> 
          }
        {reviewsByCategory.map((review) => {
          return (
            <Link key={review.review_id} className={styles.review_link} to={`/reviews/${review.review_id}`}>
                        <li className={styles.review_ul_li} >
                            <img className={styles.review_img} src={review.review_img_url} alt={review.title} />
                            <div className={styles.review_ul_li_div}>{review.title}</div>
                            <div className={styles.review_ul_li_div}>{dayjs(review.created_at).format("DD/MM/YYYY")}</div>
                            <div>by 
                            <div className={styles.review_owner}>
                                {review.owner}
                            </div>
                            </div>
                            <div className={styles.review_ul_li_div}>Designer: {review.designer}</div>
                            <div className={styles.review_body}>Review: <br />{review.review_body}</div>
                            <div className={styles.read_more}>Read More...</div>
                            <div  className={styles.review_ul_li_div}> <br /> Votes: {review.votes}</div>                                             
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
