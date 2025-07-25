import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserLogin from "./Context/UserLogin.jsx";
import { BrowserRouter } from "react-router-dom";
import FavoriteMovies from "./Context/FavoriteMovies.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserLogin>
        <FavoriteMovies>
          <App />
        </FavoriteMovies>
      </UserLogin>
    </BrowserRouter>
  </StrictMode>
);
