import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://muhsinncgames.herokuapp.com/api",
});

export const getAllReviews = () => {
    return gamesApi.get(`/reviews`).then((res)=> {
        return res.data.reviews;
    })
};

export const getReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((res)=> {
        return res.data.reviews;
    })
};

export const getAllCategories = () => {
    return gamesApi.get(`/categories`).then((res)=> {
        return res.data.categories;
    })
};

export const getUserByName = (username) => {
    return gamesApi.get(`/users/${username}`).then((res)=> {
        return res.data.user;
    })
};

export const getAllUsers = () => {
    return gamesApi.get(`/users`).then((res)=> {
        return res.data.users;
    })
};

export const getCommentsByReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
      return res.data.comments;
    });
  };

export const postCommentByReviewId = (review_id, username, body) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, {username: username, body: body}).then((res)=>{
      return res.data.comment;
    })
}
  
export const deleteCommentById = (comment_id) => {
    return gamesApi.delete(`/comments/${comment_id}`).then((res)=>{
    })
}

export const getReviewsByCategory = (category) => {
    return gamesApi.get(`/reviews?category=${category}`).then((res) => {
      return res.data.reviews;
    });
};
  
export const sortReviewsBy = (query) => {
    return gamesApi.get(`/reviews?${query}`).then((res) => {
      return res.data.reviews;
    });
};