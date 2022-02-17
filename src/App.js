import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Comments from "./components/Comments";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import  Reviews  from "./components/Reviews";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/reviews/:review_id/comments" element={<Comments />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
