import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import  Reviews  from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
