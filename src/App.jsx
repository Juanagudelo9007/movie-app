import Home from "./pages/Home";
import Login from "./components/Login";
import { app } from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  const [user, setUser] = useState(null);

  {
    /* Status change */
  }

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

  return <div>{user ? <Home user={user} /> : <Login />}</div>;
};

export default App;
