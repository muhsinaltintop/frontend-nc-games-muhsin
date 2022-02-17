import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://muhsinncgames.herokuapp.com/api",
});

export const getAllReviews = () => {
    return gamesApi.get(`/reviews`).then((res)=> {
        return res.data.reviews;
    })
}