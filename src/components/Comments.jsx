import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReview } from "../utils/api";
import dayjs from "dayjs";
import CommentVote from "./CommentVote";
import DeleteComment from "./DeleteComment";

const Comments = ({ commented }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);


  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getCommentsByReview(review_id)
    .then((commentsFromApi) => {
    setComments(commentsFromApi);
    setIsLoading(false);
    })
    .catch((err)=> {
      setError(err);
    });
  }, [review_id, voted]);
  return (
    <main>
    {isLoading? (
        <p>Loading...</p>
      ): error ?(
        <p>error!</p>
      ) : (
        <>
        
    <button onClick={toggleOpen}>


        {isOpen ? "Hide Comments" : "Show Comments"}
      </button>
      {isOpen ? (
        <><h1>Comments of {review_id}</h1><ul>
                  {comments.map((comment) => {
                    return (
                      

                      <li key={comment.comment_id}>
                        <div>{comment.author}</div>
                        <div>{comment.body}</div>
                        <div> {dayjs(comment.created_at).format("DD/MM/YYYY")}</div>
                        <div>Votes: {comment.votes}</div>
                        <div><CommentVote
                          currVotes={comment.votes}
                          comment_id={comment.comment_id}
                          setVoted={setVoted} />
                        </div>
                        <div><DeleteComment comment_id={comment.comment_id}/></div>
                      </li>
                    );
                  })}
                </ul></>

      ): null }

            </>
      )}
      </main>



  );
};

export default Comments;
