import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserLogin from "./Context/UserLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserLogin>
      <App />
    </UserLogin>
  </StrictMode>
);
