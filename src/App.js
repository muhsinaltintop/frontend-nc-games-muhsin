import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Reviews  from "./components/Reviews";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Reviews />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
