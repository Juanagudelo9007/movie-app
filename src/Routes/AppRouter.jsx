import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
