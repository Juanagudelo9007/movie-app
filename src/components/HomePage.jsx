import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { LoginContext } from "../Context/UserLogin";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const location = useLocation();

  const { user } = useContext(LoginContext);

  useEffect(() => {
    const showMesssage = setTimeout(() => {
      setWelcomeMessage(false);
    }, 6000);
    return () => clearTimeout(showMesssage);
  }, []);

  console.log(user.displayName);
  return (
    <div className="min-h-screen bg-no-repeat  bg-fixed bg-cover bg-center bg-[url('/hero-bg.png')]">
      <Navbar />
      {user?.displayName && welcomeMessage && (
        <div className="flex justify-center  bg-transparent">
          <div className=" w-[250px] h-[50px] bg-transparent flex justify-center items-center ">
            <p className="text-white text-md sm:text-2xl font-bold mt-8">
              Welcome {user?.displayName}
            </p>
          </div>
        </div>
      )}
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
