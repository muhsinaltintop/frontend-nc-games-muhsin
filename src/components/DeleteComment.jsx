import React from 'react';
import { deleteCommentById } from '../utils/api';
const DeleteComment = ({ comment_id }) => {
	const handleClick = () =>{
		
		deleteCommentById(comment_id).catch((err) => {
			console.log(err);
		});
		

	}
	return (
		<button onClick={handleClick}>Delete</button>
        
	);
}

export default DeleteComment;