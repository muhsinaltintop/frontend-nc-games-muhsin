import React, { useState } from 'react';
import { deleteCommentById } from '../utils/api';


const DeleteComment = ({ comment_id, setDeletedComment }) => {
	const [error, setError] = useState(null)

	const handleClick = (e) =>{
		e.preventDefault();
		
		deleteCommentById(comment_id)
		.then((res)=>{
			setError(null)
			setDeletedComment(true);
			return res;
		})
		.catch((error) => {
			setError(true);
		});
		// window.location.reload(false);

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