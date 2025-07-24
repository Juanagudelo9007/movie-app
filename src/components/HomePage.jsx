import React from "react";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";

const HomePage = ({ user }) => {
  const [welcomeMessage, setWelcomeMessage] = useState(true);

  useEffect(() => {
    const showMesssage = setTimeout(() => {
      setWelcomeMessage(false);
    }, 6000);
    return () => clearTimeout(showMesssage);
  }, []);

  console.log(user.displayName);
  return (
    <div className="min-h-screen bg-no-repeat  bg-fixed bg-cover bg-center bg-[url('hero-bg.png')]">
      <Navbar />
      {user?.displayName && welcomeMessage && (
        <div className="inset-0 flex justify-center items-baseline-last bg-transparent">
          <div className=" w-[250px] h-[100px] bg-transparent flex justify-center items-center rounded-md">
            <p className="text-white text-md sm:text-2xl font-bold">
              Welcome {user?.displayName}
            </p>
          </div>
        </div>
      )}
      <Home />
    </div>
  );
};

export default HomePage;
