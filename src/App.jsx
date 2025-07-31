import HomePage from "./components/HomePage";
import Login from "./components/Login";
import { LoginContext } from "./Context/UserLogin";
import { AnimatePresence, motion } from "framer-motion";
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
  

  return (
    <AnimatePresence mode="wait" initial={false}>
      {user ? (
        <motion.div
          key="private"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        >
          <PrivateRoutes />
        </motion.div>
      ) : (
        <motion.div
          key="login"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "center" }}
        >
          <Login />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;


 