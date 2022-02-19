import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReview } from "../utils/api";
import CommentsCard from "./CommentsCard";

const Comments = ({ commented }) => {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getCommentsByReview(review_id)
    .then((commentsFromApi) => {
    setIsLoading(false);
    })
    .catch((err)=> {
      setError(err);
    });
  }, [ review_id ]);
  return (
    <main>
    {isLoading? (
        <p>Loading...</p>
      ): error ?(
        <p>error!</p>
      ) : (
        <>
        <div><CommentsCard /></div>
        </>
      )}
      </main>



  );
};

export default Comments;
