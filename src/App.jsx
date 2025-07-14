import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import firebase from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebase);

const App = () => {
  const [user, setUser] = useState(true);

  onAuthStateChanged(auth, (userFirebase) => {
    userFirebase ? setUser(userFirebase) : setUser(false);
  });

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default App;
