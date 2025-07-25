import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="home" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
