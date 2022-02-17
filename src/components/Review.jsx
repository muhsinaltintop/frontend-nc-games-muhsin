import  dayjs  from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import AddComment from "./AddComment";
import Comments from "./Comments";
import styles from "./Reviews.module.css"
import ReviewVote from "./ReviewVote";

const Review = ({ username }) => {
    const [ review, setReview ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [voted, setVoted] = useState(false);
    const [ error, setError ] = useState(null);
    const { review_id } = useParams();
    const [comment, setComment] = useState(false);


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
    },[review_id, comment, voted]);

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
                        <div><ReviewVote
                            currVotes={review.votes}
                            review_id={review.review_id}
                            setVoted={setVoted}
                            />
                        </div>
                    </li>
                    <p>
                  <Comments />
                </p>
                <p>
                <AddComment
                       username={username}
                       review_id={review.review_id}
                       setComment={setComment}/> 


                </p>
                </ul>


            )}
        </main>
    )
}

export default Review;