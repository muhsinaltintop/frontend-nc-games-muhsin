import React, { useEffect, useState } from 'react'
import { getAllReviews } from '../utils/api'
import dayjs from 'dayjs';

const Reviews = () => {
  const [reviews, setAllReviews] = useState([]);


useEffect(()=>{
    getAllReviews()
    .then((reviewsFromApi) => {
        setAllReviews(reviewsFromApi);

    })  

})  
    return (
    <div>
        <h2>Reviews</h2>
        <ul>
            {reviews.map((review)=>{
                return(
                    <li key={review.review_id}>
                        <img src={review.review_img_url} alt={review.title} />
                        <div>{review.title}</div>
                        <div>{dayjs(review.created_at).format("DD/MM/YYYY")}</div>
                        <div>by {review.owner}</div>
                        <div>Designer: {review.designer}</div>
                        <div>Review: {review.review_body}</div>
                        <div> Votes: {review.votes}</div>                                             
                    </li>

                )

            }
            
            )

            }
        </ul>
        </div>
  )
}

export default Reviews;