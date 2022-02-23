import  dayjs  from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReview } from "../utils/api";
import AddComment from "./AddComment";
import Comments from "./Comments";
import styles from "./Reviews.module.css"
import ReviewVote from "./ReviewVote";


const ReviewCard = ({ username, comment }) => {
    const [ review, setReview ] = useState({});
    const [isCommented, setIsCommented] = useState(null);
    const [voted, setVoted] = useState(false);
    const { review_id } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);




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
       
                <main className={styles.review}>
                     { isLoading ? (
                <p>Loading...</p>
                ) : error ? (
                    <p>Error!</p>
                    ) : (
                        <ul className={styles.review_ul}>
                            <h3>Review {review.review_id}</h3>
                    <li className={styles.review_ul_li} key={review.review_id}>
                     
                    
                        <img className={styles.review_img} src={review.review_img_url} alt={review.title} />
                        <div className={styles.review_ul_li_div}>{review.title}</div>
                        <div className={styles.review_ul_li_div}>
                            {dayjs(review.created_at).format("DD/MM/YYYY")}
                        </div>
                        <div className={styles.review_card_owner}>
                        by
                        <Link className={styles.review_owner_link}  id="ownerlink" to={`/users/${review.owner}`}> {review.owner}</Link>
                        </div>
                        <div className={styles.review_ul_li_div}>
                            Designer: {review.designer}
                        </div>
                        <div className={styles.review_body_card}>
                            Review: {review.review_body}
                        </div>
                        <div className={styles.review_ul_li_div}w>Votes: {review.votes}</div>
                        <div><ReviewVote
                            currVotes={review.votes}
                            review_id={review.review_id}
                            setVoted={setVoted}
                            />
                        </div>
                        
                        <div>
                           <Comments review_id={review_id} isCommented={isCommented}/>                     
                        </div>
                        <div>
                            <AddComment review_id={review_id} username={username} comment={comment} setIsCommented={setIsCommented}  />
                        </div>
                        </li>

                    
</ul>


)}
</main>

    )
}

export default ReviewCard;