import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { LoginContext } from "./Context/UserLogin";
import { useContext } from "react";
import {  useEffect } from "react";
import { app } from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  const { user,setUser } = useContext(LoginContext);
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
  

  return <div>{user ? <PrivateRoutes /> : <Login />}</div>;
};

export default App;
