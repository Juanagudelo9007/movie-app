import Home from "./pages/Home";
import Login from "./components/Login";
import { app } from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default App;
