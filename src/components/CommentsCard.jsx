import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReview } from "../utils/api";
import dayjs from "dayjs";
import CommentVote from "./CommentVote";
import DeleteComment from "./DeleteComment";

const CommentsCard = ({ commented }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [voted, setVoted] = useState(false);
  const [deleted, setDeletedComment ] = useState("null")


  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);


  useEffect(() => {
    getCommentsByReview(review_id)
    .then((commentsFromApi) => {
    setComments(commentsFromApi);
    })
  }, [review_id, voted, deleted]);

  return (
        <>
        {comments.length < 1 ? ( 
         <p>
           No Comment!
         </p> 
         ) : (
          <button onClick={toggleOpen}>
        {isOpen ? `Hide Comments` : `Show Comments of ${review_id}`}
      </button>
      )}       
      {isOpen ? (
        <>
        <ul>
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
                      <div><DeleteComment comment_id={comment.comment_id} setDeletedComment={setDeletedComment} /></div>
                      </li>
                      );
                      })}
                </ul></>
                
                ): null }

            </>
)}
              

export default CommentsCard;
