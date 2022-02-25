import React, { useState } from 'react';
import { deleteCommentById } from '../utils/api';


const DeleteComment = ({ comment_id, setDeletedComment }) => {
	const [removeComment, setRemoveComment] = useState("");

	const handleDelete = () =>{
		setRemoveComment(removeComment);	
		deleteCommentById(comment_id)
		.then((res)=>{
			setDeletedComment(true);
		})
			setDeletedComment(false);

	}

	return (
		<>
			<button value={comment_id} onClick={handleDelete}>Delete</button>
		</>
        
	);
}

export default DeleteComment;