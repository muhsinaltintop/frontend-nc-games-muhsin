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