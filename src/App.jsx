import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import firebase from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase);

const auth = getAuth(firebase);

const App = () => {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);

        const docRef = doc(db, "users", userFirebase.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserName(docSnap.data().name || "");
          console.log("Loaded name:", docSnap.data().name);
        } else {
          setUser(false);
          setUserName("");
        }
      }
    });
  }, []);

  return <div>{user ? <Home userName={userName} /> : <Login />}</div>;
};

export default App;
