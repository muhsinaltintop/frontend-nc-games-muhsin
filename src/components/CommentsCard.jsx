import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getCommentsByReview } from "../utils/api";
import DeleteComment from "./DeleteComment";
import styles from './Comments.module.css';
import CommentVote from "./CommentVote";

const CommentsCard = ({review_id, isCommented}) => {
    const[comments, setComments] = useState([]);
    const[commentVoted, setCommentVoted] = useState(false);
    const[deleted, setDeletedComment] = useState(null);
    
    
        useEffect(() => {
            getCommentsByReview(review_id)
            .then((commentsFromApi) => {
            setComments(commentsFromApi);
            }).catch((error)=>{
                console.log(error);
            })
          }, [review_id, isCommented, deleted, commentVoted]);
        
          return (
            <>
            { comments.length > 0 ? (

              
                <ul className={styles.comment_ul}>
                          <li> <h2> Comments:</h2> </li>
                          {comments.map((comment) => {
                            return (
                            
                              
                              <li className={styles.comment_ul_li} key={comment.comment_id}>
                              <div className={styles.comment_author}>{comment.author}</div>
                              <div className={styles.comment_body}>{comment.body}</div>
                              <div className={styles.comment_date}> {dayjs(comment.created_at).format("DD/MM/YYYY")}</div>
                              <div className={styles.comment_votes}>Votes: {comment.votes}</div>
                              <div><CommentVote 
                              currentCommentVote={comment.votes}
                              comment_id={comment.comment_id}
                              setCommentVoted={setCommentVoted}
                              />
                              </div>
                              <div className={styles.comment_button}><DeleteComment comment_id={comment.comment_id} setDeletedComment={setDeletedComment}/></div>
                              </li> 
                              );
                            })}
                            </ul>
                            ) : (
                              <p>No Comment!</p>
                              )
                            }
          </>
                        
          )}
export default CommentsCard;