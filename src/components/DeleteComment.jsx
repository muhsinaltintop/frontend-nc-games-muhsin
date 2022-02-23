import React, { useState } from 'react';
import { deleteCommentById } from '../utils/api';


const DeleteComment = ({ comment_id, setDeletedComment }) => {
	const [error, setError] = useState(null)

	const handleClick = () =>{
	
		
		deleteCommentById(comment_id)
		.then((res)=>{
			setError(null)
			setDeletedComment(true);
			return res;
		})
		.catch((error) => {
			setError(true);
		});

	}

	return (
		<>
		{error ? (
			<p>error!</p>

		) : (
	
			<button onClick={handleClick}>Delete</button>
		
		)}
		</>
        
	);
}

export default DeleteComment;