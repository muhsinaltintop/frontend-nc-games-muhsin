import React from "react";
import CommentsCard from "./CommentsCard";

const Comments = ({review_id, isCommented}) => {    
    return (
        <>
        <p>
           <CommentsCard review_id={review_id} isCommented={isCommented}/>
        </p>
        
       
       </>

    )
} 

export default Comments;