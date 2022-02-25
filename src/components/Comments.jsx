import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getCommentsByReview } from "../utils/api";
import DeleteComment from "./DeleteComment";
import styles from './Comments.module.css';
import AddComment from "./AddComment";
import CommentVote from "./CommentVote";

const Comments = ({review_id}) => {
    const[comments, setComments] = useState([]);
    const[voted, setVoted] = useState(false);
    const[deleted, setDeletedComment] = useState(null);
    const[ commented, setCommented] = useState(null);
    
    
        useEffect(() => {
            getCommentsByReview(review_id)
            .then((commentsFromApi) => {
            setComments(commentsFromApi);
            }).catch((error)=>{
                console.log(error);
            })
          }, [review_id, deleted, voted, commented]);
        
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
                              currentVote={comment.votes}
                              id={comment.comment_id}
                              setVoted={setVoted}
                              />
                              </div>
                              <div className={styles.comment_button}><DeleteComment comment_id={comment.comment_id} setDeletedComment={setDeletedComment} comments={comments}/></div>
                              </li> 
                              );
                            })}
                  </ul>
                            ) : (
                              <p>No Comment!</p>
                              )
                            }
                            <div>
                            <AddComment 
                            review_id={review_id} 
                            currentComments={comments}
                            setCommented={setCommented}
                            />
                        </div>
          </>
                        
          )}

export default Comments;