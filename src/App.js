import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Comments from "./components/Comments";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import  Reviews  from "./components/Reviews";
import ReviewsByCategory from "./components/ReviewsByCategory";
import {User, Users} from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />
        <Route path="category/:category/reviews" element={<ReviewsByCategory />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
