import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./components/Review";
import  Reviews  from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
